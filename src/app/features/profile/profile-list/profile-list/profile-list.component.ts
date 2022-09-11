import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { error, getProfiles, isLoading } from '@store/selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getProfiles);
    // this will only be true if the user navigates here and the profiles have not yet loaded,
    // generally speaking the profiles will be loaded prior to navigating here from the home page
    loading$ = this.store.select(isLoading);
    error$ = this.store.select(error);

    constructor (private store: Store<AppState>) { }

    ngOnInit (): void {

        this.loading$.subscribe((loading) => console.log(loading));
        this.users$.subscribe((users) => console.log(users));

    }

}
