import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { generateRandomProfiles, generateRandomSuccess, generateRandomFailure } from '@store/actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ProfileService } from './profile.service';
 
@Injectable()
export class ProfileEffects {
  loadRandomProfiles$ = 
  createEffect(() =>
    this.actions$.pipe(
      ofType(generateRandomProfiles),
      switchMap(() => this.profileService.getRandomUsers().pipe(
        map(results => generateRandomSuccess({
          users: this.profileService.convertRandomUsersToUserProfiles(results)
        }),
        catchError(() => of(generateRandomFailure()))
      ))
    ))
  );
 
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}