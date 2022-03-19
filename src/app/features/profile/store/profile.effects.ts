import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { profileActions } from "./profile.actions";
import { ProfileService } from "./profile.service";


@Injectable()
export class ProfileEffects {

	loadRandomProfile$ = createEffect(() => this.actions$.pipe(
		ofType(profileActions.getRandomProfile),
		mergeMap(() => this.profileService.getProfile()
			.pipe(
				map(user => (profileActions.getRandomProfileSuccess({ user }))),
				catchError(() => of(profileActions.getRandomProfileError()))
			))
	)
	);

	constructor(
		private actions$: Actions,
		private profileService: ProfileService
	) { }
}