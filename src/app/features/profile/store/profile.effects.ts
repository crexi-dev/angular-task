import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProfileService } from '@features/profile/profile.service';
import { of } from 'rxjs';
import { transformUser } from '@features/profile/utils/transform-user';
import { ProfileResponse } from '@interfaces';

@Injectable()
export class ProfileEffects {

    getProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.initProfile),
        switchMap(() => this.profileService.fetchUser()
        .pipe(
            map((user: ProfileResponse) => profileActions.initProfileSuccess({
                profile: transformUser(user)
            })),
            catchError(() => of(profileActions.initProfileFailure()))
        ))
    ));

    constructor (private actions$: Actions, private profileService: ProfileService) {}

}
