import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import {getProfiles, isLoadingProfile} from '@store/selectors';
import {Observable} from "rxjs";
import {UserProfile} from "@interfaces";
import {Router} from "@angular/router";

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {
    profiles$: Observable<UserProfile[]> = this.store.select(getProfiles);
    isLoading$: Observable<boolean> = this.store.select(isLoadingProfile);

    displayedColumns = ['firstName', 'lastName', 'phoneNumber'];

    constructor (private store: Store<AppState>, private router: Router) {}

    ngOnInit () {
        this.store.dispatch(profileActions.searchProfile({page: 1, limit: 10}));
    }

    rowCLick(id: string) {
        const queryParams = {id: id}
        this.router.navigate(['/profile'], {queryParams});
    }

}
