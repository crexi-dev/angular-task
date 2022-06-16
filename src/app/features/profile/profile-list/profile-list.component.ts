import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import { getUserProfileList } from '../store/profile.selectors';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit  {

    public usersProfile$: Observable<UserProfile[]> = this.store.select(getUserProfileList);

    constructor (private store: Store) { }

    ngOnInit (): void {

        this.store.dispatch(profileActions.loadUserProfileList());

    }

}
