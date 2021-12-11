import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { UserProfileService } from '../services/user-profile.service';
import { profileActions } from './profile.actions';

@Injectable()
export class ProfileEffects {

    public loadProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.load),
            switchMap(() => this.userProfileService.getUserProfile()),
            map((user: UserProfile) => profileActions.loadSuccess({ user })),
            catchError(() => of(profileActions.loadFail()))
        )
    );

    constructor (
        private actions$: Actions,
        private userProfileService: UserProfileService
    ) { }

}
