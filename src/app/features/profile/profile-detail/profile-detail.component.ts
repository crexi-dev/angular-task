import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$: Observable<UserProfile> = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>) {}

    ngOnInit (): void {

        this.store.dispatch(profileActions.initProfile());

    }

}
