import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { map, mergeMap } from 'rxjs/operators';
import { IUserProfile, IUserProfileResult } from '../interfaces';
import { ProfileService } from '../profile.service';

@Injectable()
export class ProfileEffects {

    loadUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadProfiles),
        mergeMap((_) =>
        // passing the arg as 10, otherwise default as 1
            this.profileService.getUsers(10).pipe(map((response) => {

                // mapping the response
                const usersProfiles: IUserProfile[] = this.getProfiles(response?.results);
                return profileActions.loadProfilesSuccess({ data: usersProfiles });
            
            })))
    ));

    getProfiles (results: IUserProfileResult[]): IUserProfile[] {

        return results.map((user) => ({
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: user.dob,
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture,
            state: user.location.state,
            id: user.login.uuid
        }));

    }

    constructor (private actions$: Actions, private profileService: ProfileService) {}

}
