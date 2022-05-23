import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '../store/profile.actions';
import { getUserProfileList } from '../store/profile.selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListComponent implements OnInit {

  userList$ = this.store.select(getUserProfileList);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(profileActions.initProfileList());
  }

}
