import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import { LogLevel, Logger } from 'src/app/shared/logger';
import { Router } from '@angular/router';

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

    constructor(private store: Store<AppState>, private _router: Router) { }

    ngOnInit() {

        this.store.dispatch(profileActions.loadProfiles());
        this.profiles$ = this.store.select((store) => store.profiles.users);
        this.profiles$.subscribe((res) => this.dataSource = res.userProfiles);

    }

    selectedRow(row: any) {

        this.logger.debug('Row has been selected', row);
        this._router.navigate(['profile',row.id]);

    }

}
