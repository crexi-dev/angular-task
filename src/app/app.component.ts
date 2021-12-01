import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { ProfileService } from './services/profile.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.less'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'angular-task';

    constructor(
        private store: Store<AppState>,
        private profileService: ProfileService) { }

      ngOnInit() {
        this.profileService.getRandomUsers().subscribe(users => {
          console.log(users);
          this.store.dispatch(profileActions.initProfiles({users}));
        });
      }
}
