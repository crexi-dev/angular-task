import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileActions } from '../store/profile.actions';
import { getUserProfiles } from '../store/profile.selectors';
import { GoPayload } from '@core/routing/interfaces';
import { routingActions } from '@store/actions';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    // tslint:disable-next-line: object-literal-sort-keys
    styleUrls: ['./profiles.component.less']
})
export class ProfilesComponent implements OnInit {

    users$ = this.store.select(getUserProfiles);

    constructor (private store: Store<AppState>) { }

    ngOnInit () {

        this.store.dispatch(profileActions.loadRandomProfiles());

    }

    gotoProfile (event: MouseEvent, id: string): void {

        event.stopPropagation();

        const payload = {
            url: 'profile',
            // tslint:disable-next-line: object-literal-sort-keys
            queryParams: { id }
        } as GoPayload;

        this.store.dispatch(routingActions.go(payload));

    }

}
