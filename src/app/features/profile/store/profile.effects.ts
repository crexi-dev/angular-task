import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import * as ProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {

    constructor (private actions$: Actions, private profileService: ProfileService) {}

    // this effect will retireve 1 random profile and call the success action if 
    // data is returned, or the error action if an error is returned
    loadRandomProfile$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.loadRandomProfile),
        mergeMap(() => this.profileService.getRandomProfile().pipe(
            map((profile) => ProfileActions.loadRandomProfileSuccess({ profile })),
            catchError((error) => of(ProfileActions.loadRandomProfileFailure({ error })))
        ))
    ));

    // this effect will retrieve 10 random profiles and call the success action if data is 
    // returned, or the error action if an error is returned
    loadProfiles$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.loadProfiles),
        mergeMap(() => this.profileService.getProfiles().pipe(
            map((profiles) => ProfileActions.loadProfilesSuccess({ profiles })),
            catchError((error) => of(ProfileActions.loadProfilesFailure({ error })))
        ))
    ));

}
