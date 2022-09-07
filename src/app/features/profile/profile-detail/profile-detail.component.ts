import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { getRandomUser, getSelectedUser } from '@features/profile/store/profile.selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$!: Observable<UserProfile>;

    constructor (
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) {}

    ngOnInit () {

        this.store.dispatch(profileActions.fetchUsers());

        this.route.queryParams.subscribe((params) => {

            if (params.id) {

                this.store.dispatch(profileActions.selectUserUuid({ uuid: params.id }));
                this.user$ = this.store.select(getSelectedUser);

            } else {

                this.user$ = this.store.select(getRandomUser);

            }

        });

    }

}
