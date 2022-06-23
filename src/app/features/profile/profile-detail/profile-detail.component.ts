import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { UserService } from '@features/services/user.service';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})

export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, userService: UserService) {

        userService.getProfile().
        subscribe((response) =>
            this.store.dispatch(profileActions.getUserCustomProfileSuccess({ payload: response.results })));

    }

    ngOnInit () {

        this.store.dispatch(profileActions.initProfile());

    }

}
