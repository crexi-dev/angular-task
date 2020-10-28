
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { profileActions } from './profile.actions';
import { map, catchError, exhaustMap, withLatestFrom, filter } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfiles } from './profile.selectors';

@Injectable()
export class ProfileEffects {

    randomProfile$ = createEffect<any, any, any, any>(() =>
    // tslint:disable-next-line: ter-arrow-body-style
    this.actions$.pipe(
      ofType(profileActions.loadRandomProfile.type),
      exhaustMap((_) =>
        // tslint:disable-next-line: ter-arrow-body-style
        this.profileService.getRandom().pipe(
          // tslint:disable-next-line: ter-arrow-body-style
          map((user) => profileActions.loadRandomProfileSuccess({ user })),
          // tslint:disable-next-line: ter-arrow-body-style
          catchError(() => EMPTY)
        )
      )
    )
  );

    randomProfiles$ = createEffect<any, any, any, any>(() =>
  // tslint:disable-next-line: ter-arrow-body-style
  this.actions$.pipe(
    ofType(profileActions.loadRandomProfiles.type),
    withLatestFrom(this.store.select(getUserProfiles)),
    // tslint:disable-next-line: ter-arrow-body-style
    filter(([_, users]) => !Array.isArray(users) || users.length < 1),
    exhaustMap((_) =>
      // tslint:disable-next-line: ter-arrow-body-style
      this.profileService.getManyRandom().pipe(
        // tslint:disable-next-line: ter-arrow-body-style
        map((users) => profileActions.loadRandomProfilesSuccess({ users })),
        // tslint:disable-next-line: ter-arrow-body-style
        catchError(() => EMPTY)
      )
    )
  )
);

    constructor (
    private actions$: Actions,
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }

}
