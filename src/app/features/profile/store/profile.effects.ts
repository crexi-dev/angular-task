import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { profileActions } from '@store/actions';
import { ProfileService } from '../profile.service';

@Injectable()
export class ProfileEffects {

    public loadRandomProfile$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadRandomProfile),
            mergeMap(() => {

                return this.profileService.getProfile().pipe(
                    map((user) => {

                        return profileActions.loadProfileSuccess({ user });

                    }),
                    catchError(() => {

                        return EMPTY;

                    })
                );

            }

        ));

    });

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

}
