import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfiles, getError } from '@store/selectors';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { profileActions } from '../store/profile.actions';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  users: any;
  error: any;
  usersState: any;

  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // check the store first
    // only get new list if store is empty
    // do this to prevent fetching new list everytime going back to the list page from the detail page
    this.store.select(getUserProfiles).subscribe(res => {
      if(res) {
        this.users = res;
      } else {
        this.userService.getUsers(10).subscribe(
          result => {
            this.store.dispatch(profileActions.loadProfilesSuccess({ profiles: result }))
          },
          error => {
            console.log('error: ', error.statusText);
            this.store.dispatch(profileActions.loadProfilesFailure({ error: error.statusText }))
          }
        );
      }
    });
    this.store.select(getError).subscribe(err => {
      this.error = err;
    });
  }

  viewProfile(user: any) {
    this.router.navigate([ 'profile', user.id ])
  }
}