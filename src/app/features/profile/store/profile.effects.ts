// import {Actions, createEffect, ofType} from '@ngrx/effects';
// import {Injectable} from '@angular/core';
// import {ProfileService} from './profile.service'
// import {catchError, map, mergeMap} from 'rxjs/operators';
// //import {profileActions} from './profile.actions'
// import { EMPTY } from 'rxjs';

// @Injectable()
// export class ProfileEffects {
//   loadProfiles$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType('[Profile] Init'),
//       mergeMap(() => this.profileService.getProfiles().pipe(
//         map((profile: any) => ({
//             type: '[profile] Init Profile Success', payload: profile
//         })),
//         catchError(() => EMPTY)
//       ))
//     )
//   );
        

//   constructor(private actions$: Actions, private profileService: ProfileService) {
// }
// }

