import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProfileService } from '@features/profile/profile.service';
import { of } from 'rxjs';
import { transformProfileResponse } from '@features/profile/utils';
import { ProfileResponse } from '@interfaces';

@Injectable()
export class ProfileEffects {

    getProfiles$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.initProfiles),
        switchMap(({ count }) => this.profileService.fetchUsers(count)
        .pipe(
            map((user: ProfileResponse) => profileActions.initProfilesSuccess({
                profiles: transformProfileResponse(user)
            })),
            catchError(() => of(profileActions.initProfilesFailure()))
        ))
    ));

    constructor (private actions$: Actions, private profileService: ProfileService) {}

}
