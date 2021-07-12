import { Component, OnInit } from '@angular/core';
import { getUserProfileList } from '@store/selectors';
import { profileActions } from '../../store/actions';
import { AppState } from '@store/reducers';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  users$ = this.store.select(getUserProfileList);
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(profileActions.tenProfiles());
  }

}
