// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { UserProfile } from '@interfaces';
import { RandomUser, RandomUserAPIResponsePayload } from '@interfaces';

// NGRX
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from './profile.actions';

// RXJS
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

// Services
import { ProfileApiService } from '../services/profile-api.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileEffects {

    /**
     * Constructor
     * @param {Actions} actions NGRX Actions
     * @param {ProfileApiService} profileApiService user random profile HTTP service
     */
    constructor (
      private actions$: Actions,
      private profileApiService: ProfileApiService
    ) { }

    /**
     * Load one profile from backend effect
     */
    loadOneProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.PROFILE_API_GET_ONE_PROFILE),
            mergeMap(() => this.profileApiService.getOneProfile().pipe(
                map((responsePayload: RandomUserAPIResponsePayload) => {

                    // Build user profile object to store it in the store 
                    const userProfile: UserProfile = {
                        cellNumber: responsePayload.results[0].cell,
                        city: responsePayload.results[0].location.city,
                        dateOfBirth: responsePayload.results[0].dob.date,
                        email: responsePayload.results[0].email,
                        firstName: responsePayload.results[0].name.first,
                        lastName: responsePayload.results[0].name.last,
                        phoneNumber: responsePayload.results[0].phone,
                        picture: responsePayload.results[0].picture.large,
                        state: responsePayload.results[0].location.state
                    } as UserProfile;

                    return profileActions.PROFILE_API_GET_ONE_PROFILE_SUCCESS(userProfile); 

                }),
                catchError((err) => profileActions.PROFILE_API_GET_ONE_PROFILE_FAILURE(err))
            ))
        ));

    /**
     * Load profile list of the backend effect
     */
    loadProfileList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.PROFILE_API_GET_LIST_OF_PROFILES),
            mergeMap(() => this.profileApiService.getProfileList().pipe(
                map((responsePayload: RandomUserAPIResponsePayload) =>
                    profileActions.PROFILE_API_GET_LIST_OF_PROFILES_SUCCESS({

                        // Map a list of user profile objects and store them in the store
                        results: responsePayload.results.map((randomUser: RandomUser) => ({
                            cellNumber: randomUser.cell,
                            city: randomUser.location.city,
                            dateOfBirth: randomUser.dob.date,
                            email: randomUser.email,
                            firstName: randomUser.name.first,
                            lastName: randomUser.name.last,
                            phoneNumber: randomUser.phone,
                            picture: randomUser.picture.large,
                            state: randomUser.location.state
                        } as UserProfile))

                    })),
                catchError((err) => of(profileActions.PROFILE_API_GET_LIST_OF_PROFILES_FAILURE(err)))
            ))
        ));

}
