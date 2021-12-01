import { Component, OnInit } from '@angular/core';
import { GoPayload, UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { profileActions, routingActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  public users$ = this.store.select(getUserProfiles);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(profileActions.initProfiles({ numberOfResults: 10 }));
  }

  public showProfileDetail(user: UserProfile, index: number): void {
    const profileDetailRoute: GoPayload = {
      path: [`profile`],
      queryParams: { id: index.toString() }
    };

    // Select user profile in store and route to detail page
    this.store.dispatch(profileActions.selectProfile({ index: index }));
    this.store.dispatch(routingActions.go(profileDetailRoute));
  }
}
