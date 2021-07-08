import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ProfileService} from './profile.service'
import {catchError, map, switchMap} from 'rxjs/operators';
import {profileActions} from './profile.actions'

@Injectable()
export class ProfileEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.initProfile),
      switchMap(() => this.profileService.getProfiles().pipe(
        map(profiles => profileActions.initProfileSuccess({profiles})),
        catchError(() => [profileActions.initProfileError()])
      ))
    )
  );

  constructor(private actions$: Actions, private profileService: ProfileService) {
}
}