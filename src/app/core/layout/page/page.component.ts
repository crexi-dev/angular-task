// angular
import { Component, HostBinding, Input } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { LayoutState } from '../interfaces';
import { LayoutSelectors } from '../store';

// rxjs
import { tap, takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

// material
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarContentComponent } from '../snack-bar-content/snack-bar-content.component';



@Component({
  selector: 'crx-page',
  styleUrls: ['./page.scss'],
  templateUrl: './page.html'
})
export class PageComponent {

  @Input() showBackground: boolean;
  ngUnsub = new Subject<void>()
  
  toggleOverlayLoading$ = this.store.select(LayoutSelectors.getOverlayLoadingIsPresent)
  toggleSnackBar$ = this.store.select(LayoutSelectors.getSnackBarInfo)
  .pipe(
    takeUntil(this.ngUnsub),
    tap((result)=>{
      
      if(result.isPresent){
        let config = new MatSnackBarConfig()
        config.panelClass = "error-snackbar"
        this._snackBar.openFromComponent(SnackBarContentComponent,config)
      }
      else{
        this._snackBar.dismiss()
      }
    })
  )

  @HostBinding('class') myClass:string = ''
  

  constructor(
    private store: Store<LayoutState>,
    private _snackBar:MatSnackBar,
  ) { }


  ngOnInit(){
    this.toggleSnackBar$.subscribe()
    this.initToggleOverlayLoading().subscribe()

  }

  initToggleOverlayLoading(){
    return this.toggleOverlayLoading$
    .pipe(
      takeUntil(this.ngUnsub),
      map((result)=> {
        this.myClass= result? 'loading' : ''
      })
    ) 
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


