import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { profilesActions } from "@store/actions";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
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

	constructor(
		private actions$: Actions,
		private profilesService: ProfilesService
	) { }
}