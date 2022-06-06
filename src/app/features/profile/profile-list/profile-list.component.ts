import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import { LogLevel, Logger } from 'src/app/shared/logger';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

    logger = new Logger('ProfileListComponent', LogLevel.DEBUG);
    profiles$: Observable<any>;
    dataSource: UserProfile[] = [];
    displayedColumns: string[] = ['firstName', 'lastName', 'email'];

    constructor (private store: Store<AppState>, private _router: Router) { }

    ngOnInit () {

        this.profiles$ = this.store.select((store) => store.profiles.users);
        this.profiles$.pipe(take(1)).subscribe((users: UserProfile[]) => {

            // If no profiles found in the store, get some
            if (!users || users.length < 1) {

                this.logger.debug('No profiles found in store');
                this.store.dispatch(profileActions.loadProfiles());

            }

        });

    }

    selectedRow (row: any) {

        this.logger.debug('Row has been selected', row);
        this._router.navigate(['profile', row.id]);

    }

}
