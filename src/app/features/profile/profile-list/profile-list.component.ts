import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileActions } from '../store';
import { getUserProfiles } from '@store/selectors';
import { UserProfile } from '../interfaces';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    // tslint:disable-next-line: object-literal-sort-keys
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
    profiles$ = this.store.select(getUserProfiles);

    constructor(private store: Store<AppState>, private router: Router)
    {}

    ngOnInit() {
        this.store.dispatch(profileActions.initProfilesList({ loading: true }));
    }

    public viewProfile(profile: UserProfile) {
        this.store.dispatch(
            profileActions.selectProfile({ loading: true, profile })
        );
        this.router.navigate(['/profile', profile.id])
    }
}
