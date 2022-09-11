import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { profileActions } from './profile.actions';
import { ProfileService } from '../services/profile.service';
import { UserProfile } from '../interfaces';
import { ApiResponse, UserResults } from '../interfaces/api-response';

@Injectable({
    providedIn: 'root'
})
export class ProfileEffects {

    constructor (private actions$: Actions, private service: ProfileService) { }

    loadProfiles$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadProfileList),
        mergeMap(() => this.service.getProfiles().pipe(
            map((response: ApiResponse) => {

                const users: UserProfile[] = response.results.map((user: UserResults) => ({
                    cellNumber: user.cell,
                    city: user.location.city,
                    dateOfBirth: user.dob.date,
                    email: user.email,
                    firstName: user.name.first,
                    lastName: user.name.last,
                    phoneNumber: user.phone,
                    picture: user.picture.large,
                    state: user.location.state
                }));
                return profileActions.loadProfileListSuccess({ users });

            }),
            catchError(() => of(profileActions.loadProfileListError()))
        ))
    ));

}
