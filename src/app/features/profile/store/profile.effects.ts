import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { UserProfileService } from '../services/user-profile.service';
import { profileActions, profileListActions } from './profile.actions';
import { getUserProfiles } from './profile.selectors';

@Injectable()
export class ProfileEffects {

    PROFILE_COUNT = 10;

    public loadProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.load),
            switchMap(() => this.userProfileService.getUserProfile()),
            map((user: UserProfile) => profileActions.loadSuccess({ user })),
            catchError(() => of(profileActions.loadFail()))
        )
    );

    public loadProfileList$ = createEffect(() => 
        this.actions$.pipe(
            ofType(profileListActions.load),
            withLatestFrom(this.store$.select(getUserProfiles)),
            filter(([_, users]) => !users),
            switchMap(([action]) => this.userProfileService.getUserProfiles(action.userCount)),
            map((users: UserProfile[]) => profileListActions.loadSuccess({ users })),
            catchError(() => of(profileListActions.loadFail()))
        )
    );

    constructor (
        private store$: Store<AppState>,
        private actions$: Actions,
        private userProfileService: UserProfileService
    ) { }

}
