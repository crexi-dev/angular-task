import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { map, exhaustMap } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { ProfileService } from '../services/profile.service';
import { Logger, LogLevel } from 'src/app/shared/logger';
@Injectable()
export class ProfileEffects {

    logger = new Logger('ProfileEffects', LogLevel.DEBUG);

    loadProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.loadProfiles),
            exhaustMap(() =>
                this.profileService.getProfiles().pipe(
                    map((response: any) => {

                        const userProfiles = this.convertRawDataToUserProfiles(response['results']);
                        this.logger.debug('Successfully retrieved Users', userProfiles);
                        return profileActions.loadProfilesSuccess({ userProfiles });

                    })
                )
            )
        ));

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

    // Helper function
    convertRawDataToUserProfiles(result: any[]) {

        const newProfile: UserProfile[] = [];
        result.forEach((user) => {

            // NewUser
            newProfile.push({
                cellNumber: user.cell,
                city: user.location.city,
                dateOfBirth: new Date(user.dob.date),
                email: user.email,
                firstName: user.name.first,
                id: user.login.username,
                lastName: user.name.last,
                phoneNumber: user.phone,
                picture: user.picture.thumbnail,
                state: user.location.state
            });

        });

        return newProfile;

    }

}
