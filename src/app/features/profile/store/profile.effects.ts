import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { selectUrl } from "@store/selectors";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { UserProfile } from "../interfaces";
import { ProfileService } from "../services/profile.service";
import { profileActions } from "./profile.actions";
import { getSelectedUserProfile } from "./profile.selectors";


@Injectable()
export class ProfileEffects {

  initProfile$ = createEffect(() => 
    this.action$.pipe(
      ofType(profileActions.initProfile),
      switchMap(() => this.profileService.fetchUserProfile()
        .pipe(
          map((users) => profileActions.initProfileSuccess({user: users[0]})),
          catchError(err => of(profileActions.initProfileError(err))),
        ),
      ),
    ),
  );

  initProfileList$ = createEffect(() =>
    this.action$.pipe(
      ofType(profileActions.initProfileList),
      switchMap(() => this.profileService.fetchUsereProfiles()
        .pipe(
          map(users => users.map<[string, UserProfile]>((user, i) => [`${i}`, user])),
          map(users => profileActions.initProfileListSuccess({usersMap: new Map(users)})),
          catchError(err => of(profileActions.initProfileListError(err))),
        ),
      ),
    ),
  );

  foo$ = createEffect(() => 
    this.store.select(selectUrl).pipe(
      filter((url) => !!url && url.split('/')[1] === 'profile'),
      concatLatestFrom(() => this.store.select(getSelectedUserProfile)),
      map(([,userProfileOrUndefined]) => !!userProfileOrUndefined 
        ? profileActions.profileListUserSelected({user: userProfileOrUndefined})
        : profileActions.initProfile()
      ),
    ),
  )

  constructor(
    private action$: Actions,
    private profileService: ProfileService,
    private store: Store
  ) {}
}