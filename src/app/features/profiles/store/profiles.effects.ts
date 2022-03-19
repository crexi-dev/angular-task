import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { profilesActions } from "@store/actions";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { ProfilesService } from "./profiles.service";

@Injectable()
export class ProfilesEffects {

	loadProfiles$ = createEffect(() => this.actions$.pipe(
		ofType(profilesActions.getProfileList),
		mergeMap(() => this.profilesService.getProfiles()
			.pipe(
				map(users => (profilesActions.getProfileListSuccess({ users }))),
				catchError((error) => {
					return of(profilesActions.getProfileListError())
				})
			))
	));

	profilesError$ = createEffect(() => this.actions$.pipe(
		ofType(profilesActions.getProfileListError),
		tap(() => {
			this._snackBar.open('An Error Occurred Getting All Profiles', 'Error')
		})
	), { dispatch: false });

	constructor(
		private actions$: Actions,
		private profilesService: ProfilesService,
		private _snackBar: MatSnackBar
	) { }
}