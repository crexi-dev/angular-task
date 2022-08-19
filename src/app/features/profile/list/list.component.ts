import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { tap } from 'rxjs/operators';
import { profileActions } from '../store/profile.actions';
import { getUsers } from '../store/profile.selectors';

@Component({
    selector: 'crx-list',
    styleUrls: ['./list.component.scss'],
    templateUrl: './list.component.html'
})
export class ListComponent {

    displayedColumns: string[] = ['image', 'name'];

    users$ = this.store.select(getUsers).pipe(tap((users) => {

        if (!users || !users.length) {

            this.store.dispatch(profileActions.listProfile());

        }

    }));

    constructor (private store: Store<AppState>) { }

}
