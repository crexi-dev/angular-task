import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import * as profileActions from '@store/actions';

@Injectable()
export class ProfileEffects {
	private API_PATH: string = 'https://randomuser.me/api/';

	constructor(
		private http: HttpClient, 
	    private action$: Actions){
	}


	getProfile$: Observable<Action> = createEffect(() =>
	    this.action$.pipe(
	      ofType(profileActions.initProfile),
	      mergeMap(action =>
	        this.http.get(this.API_PATH).pipe(
	          map((user: UserProfile) => {
	            return profileActions.successProfile(
	            	{ payload: user }
	            );
	          }),
	          catchError((error: Error) => {
	            return of(profileActions.errorProfile(error));
	          })
	        )
	      )
	    )
	);
}