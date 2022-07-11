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
        ofType(profileActions.fetchProfiles),
        switchMap(({ count }) => this.profileService.fetchUsers(count)
        .pipe(
            map((user: ProfileResponse) => profileActions.fetchProfilesSuccess({
                profiles: transformProfileResponse(user)
            })),
            catchError((err) => {

                // would usually potentially display an error banner
                console.error(err);
                return of(profileActions.fetchProfilesFailure());

            })
        ))
    ));

    constructor (private actions$: Actions, private profileService: ProfileService) {}

}
