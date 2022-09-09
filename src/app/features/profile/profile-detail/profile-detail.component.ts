import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions, generateRandomProfiles } from '@store/actions';
import { AppState } from '@store/reducers';
import { getRandomUsers, getSelectedUserProfile } from '@store/selectors';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/shared/profile/interfaces';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {
    user$: Observable<UserProfile>;
    randomUsers$: Observable<UserProfile[]>;

    constructor (
        private store: Store<AppState>
        ) {}

    ngOnInit () {
        this.store.dispatch(profileActions.initProfile());
        this.user$ = this.store.select(getSelectedUserProfile);
        console.dir(this.user$);

        this.store.dispatch(generateRandomProfiles());
        this.randomUsers$ = this.store.select(getRandomUsers);
        console.dir(this.randomUsers$);
    }
}
