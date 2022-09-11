import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { error, getProfiles, getUserProfile, isLoading } from '@store/selectors';
import { profileActions } from '../store/profile.actions';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);
    users$ = this.store.select(getProfiles);
    loading$ = this.store.select(isLoading);
    error$ = this.store.select(error);
    backToList$ = Boolean(this.activeRoute.snapshot.params['id']);
    id$: number;

    constructor (private store: Store<AppState>, private activeRoute: ActivatedRoute) {}

    ngOnInit () {

        console.log(this.activeRoute.snapshot);
        this.users$.subscribe((users) => {

            if (users.length) {

                if (this.activeRoute.snapshot.params['id']) {

                    this.id$ = this.activeRoute.snapshot.params['id'];

                } else {

                    this.id$ = Math.floor(Math.random() * users.length);

                }
                this.store.dispatch(profileActions.getProfileById({ id: this.id$ }));

            }

        });

    }

}
