import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
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

    public userList$: Observable<UserProfile[]>;

    public ngOnInit (): void {

        // noop

    }

}
