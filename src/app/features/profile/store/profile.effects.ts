import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { profileActions } from './profile.actions';
import { ProfileService } from '../profile.service';

@Injectable()
export class ProfileEffects {

    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadRandomProfile),
        switchMap(() =>
            from(this.profileService.getRandomUser()).pipe(
                map((userProfile) => profileActions.loadRandomProfileSuccess({ userProfile })),
                catchError((error) => of(profileActions.loadRandomProfileError({ errorMessage: error })))
            ))
    ));

    loadProfileList$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadProfileList),
        switchMap(() =>
            from(this.profileService.getRandomUsers()).pipe(
                map((profileList) => profileActions.loadProfileListSuccess({ profileList })),
                catchError((error) => of(profileActions.loadProfileListError({ errorMessage: error })))
            ))
    ));

    constructor (private actions$: Actions, private profileService: ProfileService) {}

}
