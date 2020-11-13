import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProfileService } from '../services/profile.service';
import { profileActions } from './profile.actions';

@Injectable()
export class ProfileEffects {
    @Effect()
    initProfile$ = createEffect(() =>
        // tslint:disable-next-line: ter-arrow-body-style
        this.actions$.pipe(
            ofType(profileActions.initProfile),
            switchMap(() =>
                this.profileService.getOneProfile().pipe(
                    map((profile) => {
                        return profileActions.initProfileSuccess({
                            loading: false,
                            profile
                        });
                    }),
                    catchError((errorMessage) =>
                        of(
                            profileActions.initProfileFail({
                                loading: false,
                                error: errorMessage
                            })
                        )
                    )
                )
            )
        )
    );

    initProfiles$ = createEffect(() =>
        // tslint:disable-next-line: ter-arrow-body-style
        this.actions$.pipe(
            ofType(profileActions.initProfilesList),
            switchMap(() =>
                this.profileService.getProfiles().pipe(
                    map((data) => {
                        return profileActions.initProfilesListSuccess({
                            loading: false,
                            profiles: data
                        });
                    }),
                    catchError((errorMessage) =>
                        of(
                            profileActions.initProfilesListFail({
                                loading: false,
                                error: errorMessage
                            })
                        )
                    )
                )
            )
        )
    );
    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) {}

}
