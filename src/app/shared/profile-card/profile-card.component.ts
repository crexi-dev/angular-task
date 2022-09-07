import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-card',
    styleUrls: ['./profile-card.component.scss'],
    templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent implements OnInit {
    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>) {}

    ngOnInit () {
        this.store.dispatch(profileActions.initProfile());
    }
}
