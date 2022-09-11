import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { error, getProfiles, isLoading } from '@store/selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent {

    users$ = this.store.select(getProfiles);
    loading$ = this.store.select(isLoading);
    error$ = this.store.select(error);

    constructor (private store: Store<AppState>) { }

}
