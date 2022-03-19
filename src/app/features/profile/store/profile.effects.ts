import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
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
		mergeMap(({ id }) => this.profileService.getProfile(id)
			.pipe(
				map(user => (profileActions.getProfileSuccess({ user }))),
				catchError((error) => {
					return of(profileActions.getProfileError())
				})
			))
	));

	profileError$ = createEffect(() => this.actions$.pipe(
		ofType(profileActions.getProfileError),
		tap(() => {
			this._snackBar.open('An Error Occurred Getting the profile', 'Error')
		})
	), { dispatch: false });

	constructor(
		private actions$: Actions,
		private profileService: ProfileService,
		private _snackBar: MatSnackBar
	) { }
}