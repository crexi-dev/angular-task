import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { profileActions } from '@store/actions';
import { selectUserList } from '@store/selectors';
import { UserProfile } from '../interfaces';
import { Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-profile-list',
    template: `
        <app-profile-list-presenter
            [userList]="userList$ | async"
            (emitOpenProfile)="openProfile($event)"
        ></app-profile-list-presenter>
    `
})
export class ProfileListContainerComponent implements OnInit {

    public userList$: Observable<UserProfile[]> = this.store.select(selectUserList);

    constructor (private router: Router, private store: Store<{userList: UserProfile[]}>) {}

    public ngOnInit (): void {

        this.store.dispatch(profileActions.loadProfileList());

    }

    public openProfile (id: string): void {

        this.router.navigateByUrl(`/profile/${id}`);

    }

}
