// angular
import { Component } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { LayoutState } from '../interfaces';
import { LayoutActions, LayoutSelectors } from '../store';


@Component({
  selector: 'app-snack-bar-content',
  templateUrl: './snack-bar-content.component.html',
  styleUrls: ['./snack-bar-content.component.scss']
})
export class SnackBarContentComponent  {


  getSnackBarText$ = this.store.select(LayoutSelectors.getSnackBarText)
  dismissSnackbar(){
    this.store.dispatch(LayoutActions.hideSnackBar())
    
  }
  constructor(
    private store:Store<LayoutState>,
  ) { }



}
