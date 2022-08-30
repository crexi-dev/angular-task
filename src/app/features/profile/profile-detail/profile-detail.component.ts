// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { ProfileActions } from '@profile//store';
import { AppState } from '@store/reducers';
import {  pickUserProfile } from '@store/selectors';
import { UserProfile } from '../interfaces';
// rxjs
import { Observable } from 'rxjs';


@Component({
  selector: 'crx-profile-detail',
  styleUrls: ['./profile-detail.component.scss'],
  templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

  user$: Observable<UserProfile>;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    
  ) { }


  ngOnInit() {
    this.user$ = this.store.select(pickUserProfile)
    let userId = this.route.snapshot.params['id']
    this.store.dispatch(ProfileActions.updateCurrentUserId({ id: +userId - 1 }));    

  }
  
}
