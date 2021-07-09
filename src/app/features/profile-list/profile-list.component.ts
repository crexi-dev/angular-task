import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';



@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  users$ = this.store.select(getUserProfiles);

  constructor (private store: Store<AppState>, ) {}

  ngOnInit () {

      this.store.dispatch(profileActions.tenProfiles());
      
  }

}
