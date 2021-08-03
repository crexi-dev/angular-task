import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { profileActions } from '@store/actions';
import { RoutingService } from '@core/routing';
import { selectUserList } from '@store/selectors';
import { UserProfile } from '../interfaces';

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

    constructor (private routingService: RoutingService, private store: Store<{userList: UserProfile[]}>) {}

    public ngOnInit (): void {

        this.store.dispatch(profileActions.loadProfileList());

    }

    public openProfile (id: string): void {

        this.routingService.toUrl(`/profile/${id}`);

    }

}
