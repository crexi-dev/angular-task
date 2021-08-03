import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { profileActions } from '@store/actions';
import { selectUserList } from '@store/selectors';
import { UserProfile } from '../interfaces';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-profile-list',
    template: `
        <app-profile-list-presenter
            [userList]="userList$ | async"
        ></app-profile-list-presenter>
    `
})
export class ProfileListContainerComponent implements OnInit {

    public userList$: Observable<UserProfile[]> = this.store.select(selectUserList);

    constructor (private store: Store<{userList: UserProfile[]}>) {}

    public ngOnInit (): void {

        this.store.dispatch(profileActions.loadProfileList());

    }

}
