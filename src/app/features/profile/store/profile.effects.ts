 import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
 import {ProfileService} from './profile.service'
 import { map, mergeMap, catchError} from 'rxjs/operators';
// // //import { of } from 'rxjs';
  import { profileActions } from './profile.actions'
// // import { Observable, of } from 'rxjs';
//  import { Action } from '@ngrx/store';


import { EMPTY } from 'rxjs';


 @Injectable()
export class ProfileEffects {
  getProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.tenProfiles),
    mergeMap(() =>
        this.profileService.getRandomProfiles().pipe(
            map((res: { results: [[]] }) => {
                const profiles = res.results.map((profile: any) => {
                    return {
                        cellNumber: profile.cell,
                        city: profile.location.city,
                        dateOfBirth: profile.dob.date,
                        email: profile.email,
                        firstName: profile.name.first,
                        lastName: profile.name.last,
                        phoneNumber: profile.phone,
                        picture: profile.picture.medium,
                        state: profile.location.state,
                    };
                });

                return profileActions.tenProfilesSuccess({ profiles });
            }),
            catchError(() => EMPTY)
        )
    )
   )
  );

    
      

   constructor(private actions$: Actions, private profileService: ProfileService) {
 }



	


}
