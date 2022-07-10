import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-user-list',
    styleUrls: ['./user-list.component.scss'],
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    users$: Observable<UserProfile[]> = this.store.select(getUserProfiles);

    constructor (private store: Store<AppState>) {}

    ngOnInit (): void {

        this.store.dispatch(profileActions.initProfiles({ count: 10 }));

    }

}
