import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable, Subscription } from 'rxjs';
import { UserProfile } from '../interfaces';
import * as ProfileActions from '../store/profile.actions';
import { areAllProfilesLoaded, getAllProfiles, getAllProfilesError } from '../store/profile.selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit, OnDestroy {

    profiles$: Observable<UserProfile[]>;
    isLoaded: Subscription;
    errorMessage$: Observable<string>;

    constructor (private store: Store<AppState>) { }

    ngOnInit (): void {

        this.profiles$ = this.store.select(getAllProfiles);
        this.errorMessage$ = this.store.select(getAllProfilesError);
    
        // check to see if data has been loaded. If not, load the data.
        this.isLoaded = this.store.select(areAllProfilesLoaded)
        .subscribe((isLoaded) => {

            if(!isLoaded) {

                this.store.dispatch(ProfileActions.loadProfiles());

            }
        
        });
    
    }

    ngOnDestroy (): void {

        this.isLoaded.unsubscribe();
    
    }

}
