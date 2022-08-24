import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import {
    getProfileList,
    isProfileListLoading,
    profileListError
} from '@store/selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    // TODO: Error handling
    error$ = this.store.select(profileListError);
    loading$ = this.store.select(isProfileListLoading);
    profileList$ = this.store.select(getProfileList);

    constructor (private store: Store<AppState>) {}

    ngOnInit () {

        this.store.dispatch(profileActions.loadProfileList());

    }

}
