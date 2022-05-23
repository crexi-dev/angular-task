import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { ProfileService } from "../services/profile.service";
import { profileActions } from "./profile.actions";



@Injectable()
export class ProfileEffects {

  initProfile$ = createEffect(() => 
    this.action$.pipe(
      ofType(profileActions.initProfile),
      switchMap(() => 
        this.profileService.fetchUserProfile().pipe(map((users) => profileActions.initProfileSuccess({user: users[0]}))))
    ),
  )

  constructor(
    private action$: Actions,
    private profileService: ProfileService
  ) {}
}