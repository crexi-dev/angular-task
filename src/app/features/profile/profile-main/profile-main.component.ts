// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import {tap,takeUntil} from 'rxjs/operators'
import { fromEvent,merge, Subject, Subscription } from 'rxjs';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '../store';
import { listUserProfiles } from '../store/profile.selectors';

// misc
import { env } from 'src/environments/environment';



@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  
  users$ = this.store.select(listUserProfiles);
  ngUnsub = new Subject<void>()

  constructor (
    private store: Store<AppState>,
    private router:Router,
  ) {}

  ngOnInit() {
    this.checkIfInitialProfilesWereLoaded().subscribe()
  }

  checkIfInitialProfilesWereLoaded(){
    return this.users$
    .pipe(
      takeUntil(this.ngUnsub),
      tap((result)=>{
        
        if(result.length ===0){
          this.store.dispatch(ProfileActions.loadingListRandomProfile());
        }
        else if(result.length < env.profileList.amntOfUsersLimit && !this.initLoadOnScrollBottomSub){
          this.initLoadOnScrollBottomSub =this.initLoadOnScrollBottom().subscribe()
        }
        else if(result.length === env.profileList.amntOfUsersLimit){
          this.initLoadOnScrollBottomSub?.unsubscribe()
        }
      })
    )
  
  }

  initLoadOnScrollBottomSub:Subscription
  initLoadOnScrollBottom() {
    return  merge(
      fromEvent(window, 'scroll'),
      fromEvent(window, 'resize')
    )
      .pipe(
        takeUntil(this.ngUnsub),
        tap(() => {
          let xPixelsFromTheBottom = this.determineXPixelsFromBottom();
          if(xPixelsFromTheBottom < env.profileList.amntOfPixelsFromBottomBeforeRetrievingData && this.router.url === env.nav.profilesPage){
            
            this.store.dispatch(ProfileActions.loadingListRandomProfile());
          }
        })
      )

  }

  determineXPixelsFromBottom() {
    let element = document.documentElement;
    let xPixelsFromTheBottom = Math.abs(
      ((element.scrollHeight - element.scrollTop) - element.clientHeight)
    );
    return xPixelsFromTheBottom;
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
