import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getProfileByRouteId } from '@features/profile/store/profile.selectors';
import { UserProfile } from '@interfaces';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent {

    user$ = this.store.pipe(select(getProfileByRouteId), filter((p: UserProfile | null) => p !== null));

    constructor (private store: Store<AppState>) {
    }

}
