import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import {
    getUserProfile,
    isProfileDetailLoading,
    profileDetailError
} from '@store/selectors';
import { Subscription } from 'rxjs';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnDestroy, OnInit {

    private routeSub: Subscription;

    error$ = this.store.select(profileDetailError);
    loading$ = this.store.select(isProfileDetailLoading);
    user$ = this.store.select(getUserProfile);

    constructor (private route: ActivatedRoute, private store: Store<AppState>) { }

    ngOnInit (): void {

        this.routeSub = this.route.params.subscribe((params) => {

            const userId = params.id || null;

            if (userId) {

                this.store.dispatch(profileActions.getProfile({ userId }));

            } else {

                this.store.dispatch(profileActions.loadRandomProfile());

            }

        });

    }

    ngOnDestroy (): void {

        if (this.routeSub) {

            this.routeSub.unsubscribe();

        }

    }

}
