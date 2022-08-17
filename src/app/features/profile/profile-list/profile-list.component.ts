import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as profileActions from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfiles } from '@store/selectors';
import { UserProfile } from '../interfaces';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select<UserProfile[]>(getProfiles);

    constructor (private store: Store<AppState>, private router: Router) {}

    ngOnInit (): void {

        this.store.dispatch(profileActions.fetchAll({ users: [] }));

    }

    onProfileClicked (event: any, id: number): void {

        if (event) {

            event.stopPropagation();
            event.preventDefault();

        }

        this.router.navigate([`/profile/${id}`]);
        
    }

}
