import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { profileActions } from "./profile.actions";
import { ProfileService } from "./profile.service";


@Injectable()
export class ProfileEffects {

	loadRandomProfile$ = createEffect(() => this.actions$.pipe(
		ofType(profileActions.getRandomProfile),
		mergeMap(() => this.profileService.getProfile()
			.pipe(
				map(user => (profileActions.getProfileSuccess({ user }))),
				catchError((error) => {
					return of(profileActions.getProfileError())
				})
			))
	));

	loadProfile$ = createEffect(() => this.actions$.pipe(
		ofType(profileActions.getProfile),
		tap(console.log),
		mergeMap(({ id }) => this.profileService.getProfile(id)
			.pipe(
				map(user => (profileActions.getProfileSuccess({ user }))),
				catchError((error) => {
					return of(profileActions.getProfileError())
				})
			))
	));

	constructor(
		private actions$: Actions,
		private profileService: ProfileService
	) { }
}