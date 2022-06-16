import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { profileActions } from './profile.actions';
import { ProfileService } from './profile.service';
 
@Injectable()
export class ProfileEffects {
  
    constructor (
    private actions$: Actions,
    private profileService: ProfileService
    ) {}

    loadUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadUserProfile),
        switchMap(() => this.profileService.getUserProfile()
        .pipe(
            map((userProfile) => profileActions.loadUserProfileSuccess({ userProfile })),
            catchError(() => of(profileActions.loadUserProfileError({ error: 'Unable to load users!' })))
        ))
    ));

    loadUserProfileList$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadUserProfileList),
        switchMap(() => this.profileService.getUserProfileList()
        .pipe(
            map((usersProfileList) => profileActions.loadUserProfileListSucess({ userProfiles: usersProfileList })),
            catchError(() => of(profileActions.loadUserProfileError({ error: 'Unable to load users!' })))
        ))
    ));

}
