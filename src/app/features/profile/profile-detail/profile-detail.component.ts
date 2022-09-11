import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable, Subscription } from 'rxjs';
import { UserProfile } from '../interfaces';
import { areAllProfilesLoaded, 
    getAllProfilesError, 
    getProfileWithId, 
    getRandomProfile, 
    getRandomProfileError, 
    hasRandomProfileLoaded 
} from '../store/profile.selectors';
import * as ProfileActions from '../store/profile.actions';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

    currentProfile$: Observable<UserProfile>;
    isRandomLoaded: Subscription;
    areAllLoaded: Subscription;
    errorMessageRandom$: Observable<string>;
    errorMessageAll$: Observable<string>;
    profileId: number;

    constructor (private route: ActivatedRoute, private store: Store<AppState>) {}

    ngOnInit () {

        // NOTE: There is room for improvement on how errors are handled and displayed to users. 
        // However, I am not spending too much time on refining error handling since it is not 
        // the point off the exercise.

        this.profileId = +this.route.snapshot.paramMap.get('profid');

        // If a profile id was provided in the route, then get the specified profile.
        if (this.profileId) {

            this.errorMessageAll$ = this.store.select(getAllProfilesError);

            // Check to see if profiles have been loaded. If not, load them. 
            // Select the profile based on the provided profile id.
            this.areAllLoaded = this.store.select(areAllProfilesLoaded)
            .subscribe((allLoaded) => {

                if (!allLoaded) {

                    this.store.dispatch(ProfileActions.loadProfiles());
                
                } 
                this.currentProfile$ = this.store.select(getProfileWithId(this.profileId));
            
            });
            
        } else { // A profile id was not provided, so get a random profile.
            
            this.errorMessageRandom$ = this.store.select(getRandomProfileError);

            // Check to see if the random profile loaded. If not, load the data.
            this.isRandomLoaded = this.store.select(hasRandomProfileLoaded)
            .subscribe((isLoaded) => {

                if (!isLoaded) {

                    this.store.dispatch(ProfileActions.loadRandomProfile());
                
                }
                this.currentProfile$ = this.store.select(getRandomProfile);
            
            });

        }

    }

    ngOnDestroy () {

        if (this.isRandomLoaded) {

            this.isRandomLoaded.unsubscribe();

        }
        if (this.areAllLoaded) {

            this.areAllLoaded.unsubscribe();

        }
    
    }

}
