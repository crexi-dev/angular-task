import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '../store/profile.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit  {

    constructor (private store: Store) { }

    ngOnInit (): void {

        this.store.dispatch(profileActions.loadUserProfileList());

    }

}
