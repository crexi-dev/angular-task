// Agnular 
import { Component, OnInit } from '@angular/core';

// Interfaces
import { UserProfile } from '@interfaces';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileActions } from '../store/profile.actions';
import { GET_PROFILE_LIST } from '../store/profile.selectors';

// RxJS
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    /**
     * Holds list of displayed table columns in order
     */
    displayedColumns: string[] = ['profile-picture', 'name', 'view-profile'];

    /**
     * Holds list of user profiles
     */
    userList$: Observable<UserProfile[] | undefined> = this.store.select(GET_PROFILE_LIST);

    /**
     * Constructor
     * @param {Store<AppState} store  The profile feature store
     */
    constructor (private store: Store<AppState>) { }

    /**
     * Angular lifecyle hook
     */
    ngOnInit (): void {

        // If a list of user profiles has not been loaded then dispatch an action to load a list from the backend
        this.userList$.subscribe((userList: UserProfile[] | undefined) => {

            if(userList === undefined) {

                this.store.dispatch(profileActions.PROFILE_API_GET_LIST_OF_PROFILES());
            
            }
        
        });
      
    }

}
