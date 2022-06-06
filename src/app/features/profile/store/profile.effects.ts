import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { map, exhaustMap } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ProfileEffects {

    loadProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.loadProfiles),
            exhaustMap(() =>
                this.profileService.getProfiles().pipe(
                    map((response: any) => {
                        const userProfiles = this.convertRawDataToUserProfiles(response['results']);
                        return profileActions.loadProfilesSuccess({ userProfiles });

                    })
                )
            )
        ));

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }


    convertRawDataToUserProfiles(result: any[]) {
        const newProfile: UserProfile[] = [];
        result.forEach((user) => {

            // NewUser
            newProfile.push({
                cellNumber: user.cell,
                city: user.location.city,
                dateOfBirth: 'Jan 1st, 1966',
                email: user.email,
                firstName: user.name.first,
                lastName: user.name.last,
                phoneNumber: user.phone,
                picture: user.picture.thumbnail,
                state: user.location.state
            });
        })

        return newProfile;

    }
}
