import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
//import { getUserProfile } from '@store/selectors';
//import { ProfileService } from '../profile/store/profile.service'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  user$ = this.store.select(getUserProfile);

  constructor (private store: Store<AppState>) {}

  ngOnInit () {

      this.store.dispatch(profileActions.initProfile());
      
  }

}
