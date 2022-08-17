import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getProfiles } from '@store/selectors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as profileActions from './profile.actions';
import { UserProfile } from '../interfaces';
import { ProfileListService } from '../profile-list/profile-list.service';
import { ProfileDetailService } from '../profile-detail/profile-detail.service';

const MAX_RANDOM_USERS_AMOUNT = 10;

@Injectable()
export class ProfileEffects {

    private profiles: UserProfile[] = [];

    constructor (
        private store: Store<AppState>,
        private actions$: Actions,
        private profileListService: ProfileListService,
        private profileDetailService: ProfileDetailService
    ) {

        this.watchForStateChanged();

    }

    fetchProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.fetchAll),
            exhaustMap(() => (
                this.profileListService.fetchProfiles(MAX_RANDOM_USERS_AMOUNT).pipe(
                    map((profiles: UserProfile[]) => profileActions.fetchAllSuccess({ users: profiles })),
                    catchError((error: any) => of(profileActions.fetchAllFailure(error.message)))
                )
            ))
        ));

    fetchProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.fetch),
            exhaustMap(() => (
                this.profileDetailService.fetchProfile().pipe(
                    map((profile: UserProfile) => profileActions.fetchSuccess({ user: profile })),
                    catchError((error: any) => of(profileActions.fetchFailure(error.message)))
                )
            ))
        ));

    /**
     * Since there is no endpoint to request profile/user by its ID,
     * trying to find it in the list of ones in store
     * 
     * @memberof ProfileEffects
     */
    findProfileById$ = createEffect(() => (
        this.actions$.pipe(
            ofType(profileActions.findById),
            exhaustMap((action) => {

                const foundProfile = this.profiles.find((p) => p.id === action.id);
                return of(profileActions.findByIdSuccess({ user: foundProfile }));

            })
        )
    ));

    /**
     * Watching for any updates of list of existing profiles for further use.
     */
    private watchForStateChanged () {

        this.store.select<UserProfile[]>(getProfiles).subscribe((data) => this.profiles = data);

    }

}
