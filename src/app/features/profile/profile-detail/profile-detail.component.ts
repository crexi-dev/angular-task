import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initProfile, generateRandomProfiles } from '@store/actions';
import { AppState } from '@store/reducers';
import { getSelectedUserProfile, getUserName, getRandomUsers } from '@store/selectors';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/shared/profile/interfaces';
import { ProfileService } from 'src/app/shared/profile/store/profile.service';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {
    user$: Observable<UserProfile>;
    randomUsers$: Observable<UserProfile[]>;
    name: Observable<string>;

    constructor (
        private store: Store<AppState>,
        public profileService: ProfileService
        ) {}

    ngOnInit () {
        this.store.dispatch(initProfile());
        this.user$ = this.store.select(getSelectedUserProfile);

        this.store.dispatch(generateRandomProfiles());
        this.randomUsers$ = this.store.select(getRandomUsers);

        this.name = this.store.select(getUserName);

        this.randomUsers$ = this.profileService.getRandomUsersAsUserProfiles();
    }
}
