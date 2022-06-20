import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { profileActions } from './profile.actions';
import { ProfileService } from './profile.service';
 
// Effects is the middleware between the service layer and the reducer
// This will take care of all the side effects for any actions like making an API call and handling any business logic
@Injectable()
export class ProfileEffects {
  
    constructor (
    private actions$: Actions,
    private profileService: ProfileService
    ) {}

    // Efficts to get single random user from api and dispatch the success action to store the single user
    loadUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadUserProfile),
        switchMap(() => this.profileService.getUserProfile()
        .pipe(
            map((userProfile) => profileActions.loadUserProfileSuccess({ userProfile })),
            catchError(() => of(profileActions.loadUserProfileError({ error: 'Unable to load users!' })))
        ))
    ));
    
    // Effects to get the list of users from API based on pagination setups and 
    // dispatch the success action to store the data
    loadUserProfileList$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadUserProfileList),
        switchMap((request) => this.profileService.getUserProfileList(request.usersRequest)
        .pipe(
            map((usersProfileList) => profileActions.loadUserProfileListSucess({ 
                page: request.usersRequest.page, 
                pageSize: request.usersRequest.pageSize,
                userProfiles: usersProfileList
                
            })),
            catchError(() => of(profileActions.loadUserProfileError({ error: 'Unable to load users!' })))
        ))
    ));

}
