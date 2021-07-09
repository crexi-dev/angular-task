import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ProfileService} from './profile.service'
import {catchError, map, mergeMap} from 'rxjs/operators';
import {profileActions} from './profile.actions'
import { EMPTY } from 'rxjs';

@Injectable()
export class ProfileEffects {
  loadProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.initProfile),
      mergeMap(() => this.profileService.getProfiles().pipe(
        map((res: { results: [[]] }) => {
            const data: any = res.results[0];
            const user = {
                cellNumber: data.cell,
                city: data.location.city,
                dateOfBirth: data.dob.date,
                email: data.email,
                firstName: data.name.first,
                lastName: data.name.last,
                phoneNumber: data.phone,
                picture: data.picture.medium,
                state: data.location.state,
            };

            return profileActions.initProfileSuccess({ user });
            
        }),
        catchError(() => EMPTY)
    )
)
);
        

  constructor(private actions$: Actions, private profileService: ProfileService) {
}
}