import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import { getUserProfileList } from '../store/profile.selectors';

@Component({
  selector: 'crx-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

  readonly MAX_LIST_LENGTH = 10;

  list$: Observable<UserProfile[]>;

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    
    // GET THE LIST 
    this.store.dispatch(profileActions.getProfileList({ count: this.MAX_LIST_LENGTH }));

    this.list$ = this.store.select(getUserProfileList);
  }
}
