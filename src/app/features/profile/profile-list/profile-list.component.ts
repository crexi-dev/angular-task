import { Component, OnInit } from '@angular/core';
import { profileActions } from '@features/profile/store/profile.actions';
import { AppState } from '@store/reducers';
import { Store } from '@ngrx/store';
import { getUsers } from '@features/profile/store/profile.selectors';
import { Router } from '@angular/router';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getUsers);

    constructor (
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit () {

        this.store.dispatch(profileActions.fetchUsers());

    }

    goToUser (uuid: string) {

        this.router.navigate(['/profile'], { queryParams: { id: uuid } }).then();

    }

}
