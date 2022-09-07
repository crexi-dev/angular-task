import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { profileActions } from '@store/actions';
import { catchError, filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { RandomUserApiService } from '@core/services/random-user-api.service';
import { RandomUserApiResponse } from '@core/models/random-user-api.model';
import { parseRandomUserApiUserToAppUser } from '@core/utils/random-user-api.utils';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUsers } from '@features/profile/store/profile.selectors';

@Injectable({ providedIn: 'root' })
export class ProfileEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.fetchUsers),
        withLatestFrom(this.store.select(getUsers)),
        filter(([_, users]) => !users.length), // only run if we don't already have users
        mergeMap(() => this.randomUserApiService.getUsers()
        .pipe(
            map((response: RandomUserApiResponse) => {

                if ('results' in response) {

                    return profileActions.fetchUsersSuccess({
                        users: response.results.map((result) => parseRandomUserApiUserToAppUser(result))
                    });

                } else if ('error' in response) {

                    return profileActions.fetchUsersFailure({
                        error: response.error
                    });

                }
                return profileActions.fetchUsersFailure({});

            }),
            catchError((error: Error) => of(profileActions.fetchUsersFailure({
                error: error.message
            })))
        ))
    ));

    errorUsers$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.fetchUsersFailure),
        tap(({ error }) => {

            // This may be a good spot to trigger a toast notification or something to the user for the error
            console.error(error);

        })
    ), { dispatch: false });

    constructor (
        private actions$: Actions,
        private randomUserApiService: RandomUserApiService,
        private store: Store<AppState>
    ) {}

}
