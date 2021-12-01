import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent {

  public users$ = this.store.select(getUserProfiles);

  constructor(
    private store: Store<AppState>) { }


}
