import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import { profileActions } from './profile.actions';
import { getUsers } from './profile.selectors';
 
@Injectable()
export class ProfileEffects {
 
    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.initProfile),
        mergeMap(() => this.profileService.getUsers(1)
        .pipe(
            map((user) => profileActions.successProfile(user.results[0])),
            catchError(() => EMPTY)
        ))
    ));

    updateProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.updateProfile),
        withLatestFrom(this.store.select(getUsers)),
        mergeMap(([profile, users]) => 
            of(profileActions.successProfile(users.find((u) => u.name.first === profile.name))))
    ));
 
    loadProfiles$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.listProfile),
        mergeMap(() => this.profileService.getUsers(10)
        .pipe(
            map((users) => profileActions.listSuccessProfile(users)),
            catchError(() => EMPTY)
        ))
    ));
 
    constructor (
        private actions$: Actions,
        private profileService: ProfileService,
        private store: Store<AppState>
    ) {

    }

}
