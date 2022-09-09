// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { UserProfile } from '@interfaces';

// NGRX
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { GET_ONE_PROFILE } from '@store/selectors';

// RXJS
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    /**
     * Holds the user profile
     */
    user$: Observable<UserProfile | undefined> = this.store.select(GET_ONE_PROFILE);

    /**
     * Constructor
     * @param {Store<AppState} store  The Profile feature store
     * @param {ActivatedRoute} route  The activated route
     */
    constructor (private store: Store<AppState>, private route: ActivatedRoute) {}

    /**
     * Angular lifecyle hook
     */
    ngOnInit (): void {
        
        // If a route parameter was provided from the "Profile List" page select the user by their id from the store
        if (this.route.snapshot.params['id'] !== undefined) {

            // Create the params for the action
            const id = {id: Number(this.route.snapshot.params['id']) };

            this.store.dispatch(
                profileActions.PROFILE_PAGE_GET_ONE_PROFILE_BY_ARRAY_INDEX(id));

        } else {

            // If no route parem is present with an id dispatch an action to get a random user from the backend
            this.store.dispatch(profileActions.PROFILE_API_GET_ONE_PROFILE());

        }

    }

}
