// angular
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


// misc
import { UtilService } from '@core/utils/utility.service';
import { env } from 'src/environments/environment';
// rxjs
import { Subject, Subscription } from 'rxjs';
import { tap, takeUntil, filter,pluck, exhaustMap } from 'rxjs/operators';

// three.js
import { removeAll, Tween, update } from 'content/scripts/tween.js/tween';
import {
  Scene,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshLambertMaterial,
  WebGLRenderer,
  TextureLoader,
  SphereGeometry,
  PerspectiveCamera,
  Vector3,
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// store
import {  ProfileSelectors } from '@features/profile/store';
import { Store } from '@ngrx/store';
import { ProfileState, UserProfile } from '@interfaces';




@Component({
  selector: 'app-threejs-background',
  templateUrl: './threejs-background.component.html',
  styleUrls: ['./threejs-background.component.scss']
})
export class ThreejsBackgroundComponent implements OnInit {

  ngUnsub = new Subject();
  camera!: PerspectiveCamera;
  scene = new Scene();
  renderer!: WebGLRenderer
  planetEarth!: Mesh
  controls!:OrbitControls
  currentUser$= this.store.select(ProfileSelectors.pickUserProfile)
  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private utilService: UtilService,
    private router: Router,
    private store:Store<ProfileState>,
    private http:HttpClient
  ) { }


  initShowCoordsOfCurrentUsersLocationOnPlanet(){
    let sub:Subscription
    
    sub =this.currentUser$
    .pipe(
      filter((user)=> user instanceof UserProfile),
      takeUntil(this.ngUnsub),
      exhaustMap((user)=>{
        let endpoint = env.endpoints.getLocationCoords(user.city)
        
        return this.adjustCameraToLookAtLocation(endpoint,sub)
        
      })
    )
    .subscribe()

  }

  calcPosFromLatLonRad(lat:number,lon:number){
    var phi= (90-lat)*(Math.PI/180)
    var theta= (lon+180)*(Math.PI/180);

    let x = -(Math.sin(phi)*Math.cos(theta)) * env.threeJSBackground.planetEarthRadians;
    let y = (Math.cos(phi)) * env.threeJSBackground.planetEarthRadians;
    let z = (Math.sin(phi)*Math.sin(theta)) * env.threeJSBackground.planetEarthRadians
    return {x,y,z}
  }

  adjustCameraToLookAtLocation=(endpoint:string,sub?:Subscription)=>{
    return this.http.get(endpoint)
    .pipe(
      takeUntil(this.ngUnsub),
      pluck("features","0","center"),
      tap((result:number[])=>{

        let [lng,lat]= result
        let {x,y,z} = this.calcPosFromLatLonRad(lat,lng)
        var camDistance = this.camera.position.length();   

        
        let vector = new Vector3(x,y,z)
        .normalize()
        .multiplyScalar(camDistance)
        
        this.camera.position.copy(vector)
        this.planetEarth.rotation.set(0,0,0)
        sub?.unsubscribe()
      })
    )
  }

  ngOnInit(): void {
    this.initThreeJs()
    this.animate();
    this.updateEarthsPosition().subscribe()
  }

  initThreeJs() {

    this.initCamera();
    this.initBackground();
    this.initPlanetEarth();
    this.addLightsToScene();
    this.applyCanvasToDisplayDiv();
    this.initOrbitControls();
  }
  initCamera() {
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.setFocalLength(5);
    this.camera.position.set(
      env.threeJSBackground.cameraProfilesPosition.x,
      env.threeJSBackground.cameraProfilesPosition.y,
      env.threeJSBackground.cameraProfilesPosition.z
    );
  }




  initBackground() {
    new TextureLoader().load(
      "content/img/pexels-peng-liu-169647.jpg",
      (result) => {
        this.scene.background = result;
      }, () => { }, console.log
    );
  }

  initPlanetEarth() {
    new TextureLoader().load(
      "content/img/earth.jpg",
      (result) => {

        let geometry = new SphereGeometry(env.threeJSBackground.planetEarthRadians, 64, 64);
        let material = new MeshLambertMaterial({ map: result });
        this.planetEarth = new Mesh(geometry, material);

        
        this.scene.add(this.planetEarth);
      }, () => { }, console.log
    );
  }

  applyCanvasToDisplayDiv = () => {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.setCanvasDimsBasedOnDisplayElement();
    this.renderer2.appendChild(this.el.nativeElement, this.renderer.domElement);
  }

  initOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
  }

  addLightsToScene() {
    this.scene.add(new AmbientLight(0xffffff, 1.5));
    let light = new DirectionalLight(0xffffff, 0.35);
    light.position.set(1, 5, 1).normalize();
    this.scene.add(light);
  }

  updateEarthsPosition() {
    return this.router.events
      .pipe(
        takeUntil(this.ngUnsub),
        filter((evt) => evt instanceof NavigationEnd),
        tap((evt: NavigationEnd) => {
          
          removeAll()
          let finalPosition = evt.url.match(/^\/\profiles/) ? env.threeJSBackground.cameraProfilesPosition : env.threeJSBackground.cameraProfilePosition
          new Tween(this.camera.position)
            .to(
              finalPosition,
              1200
            )
            .onComplete(()=>{
              if(evt.url.match(/^\/\profile\/?(?!s)/)){
                this.initShowCoordsOfCurrentUsersLocationOnPlanet()
              }
            })
            .start()


        })
      );

  }

  retrieveDimsOfDisplayElement = () => {

    let displayDivWidth = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).width);
    let displayDivHeight = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).height);
    return { displayDivWidth, displayDivHeight };
  }

  setCanvasDimsBasedOnDisplayElement = () => {
    let { displayDivWidth, displayDivHeight } = this.retrieveDimsOfDisplayElement();
    this.renderer.setSize(displayDivWidth, displayDivHeight);
  }

  animate = () => {

    requestAnimationFrame(this.animate);
    this.setCanvasDimsBasedOnDisplayElement()
    
    this.controls.update()
    update()

    if(this.router.url.match(/^\/\profiles/)){
      this.planetEarth?.rotateY(0.005)
      this.planetEarth?.rotateX(0.005)
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  ngOnDestroy(){
    
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
