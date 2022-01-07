import { Injectable } from '@angular/core';
import { UserProfileService } from '@features/profile/services/profile.service';
import { UserProfile } from '@interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { profileActions, profileListActions } from '../actions/profile.actions';
import { getUserProfiles } from '../selectors/profile.selectors';

@Injectable()
export class ProfileEffects {

    public loadProfile$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.load),
            switchMap(() => {

                return this.userProfileService.getUserProfile();

            }),
            map((user: UserProfile) => {

                return profileActions.loadSuccess({ user });

            }),
            catchError(() => {

                return of(profileActions.loadFail());

            })
        );

    });

    public loadProfileList$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileListActions.load),
            withLatestFrom(this.store$.select(getUserProfiles)),
            filter(([_, users]) => {

                return !users;

            }),
            switchMap(([action]) => {

                return this.userProfileService.getUserProfiles(action.userCount);

            }),
            map((users: UserProfile[]) => {

                return profileListActions.loadSuccess({ users });

            }),
            catchError(() => {

                return of(profileListActions.loadFail());

            })
        );

    });

    constructor(
        private store$: Store<AppState>,
        private actions$: Actions,
        private userProfileService: UserProfileService
    ) { }

}
