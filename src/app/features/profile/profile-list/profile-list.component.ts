import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfileList } from '@store/selectors';
import { Observable } from 'rxjs';
import { IUserProfile } from '../interfaces';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    userProfileList$: Observable<IUserProfile[]>;
    constructor (private store: Store<AppState>) {}

    ngOnInit (): void {

        this.userProfileList$ = this.store.select(getUserProfileList);

    }

}
