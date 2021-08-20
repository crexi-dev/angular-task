import { Component, OnInit } from '@angular/core';
import {  getUserProfile } from '@store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { loadProfile } from '@store/actions';
import { UserProfile } from '../interfaces';





@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {


  users$: UserProfile [] = [];
  showDetails: Boolean = false;


  constructor(private store: Store<AppState>) {}

  
  
  ngOnInit() {


    for(let i = 0 ; i < 10; i++){
      this.store.dispatch(loadProfile());
      
    }
    this.store.select(getUserProfile).subscribe(data => {
        this.users$.push(data);
    })

    this.users$ = this.users$.filter(function( element ) {
      return element !== undefined;
   });

  }

  toProfileDetail(user: any){

    user.visible = ! user.visible

  }
  
  

}
