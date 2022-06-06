import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';


@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
    profiles$: Observable<any>;
    dataSource: UserProfile[] = [];
    displayedColumns: string[] = ['firstName', 'lastName', 'email'];

    constructor(private store: Store<AppState>) { }

    ngOnInit() {

        this.store.dispatch(profileActions.loadProfiles());
        this.profiles$ = this.store.select((store) => store.profiles.users);
        this.profiles$.subscribe((res) => this.dataSource = res.userProfiles);

    }
}
