import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { profileActions } from './profile.actions';

@Injectable()

export class UserEffects {

    constructor (
        private action$: Actions,
        private apiService: ApiService
    ) {

    }

    getUsers$ = createEffect(() =>
        this.action$.pipe(ofType(profileActions.getUserData), exhaustMap(() =>
            this.apiService.getRandomUsers().pipe(
                map((response: any) => profileActions.getUserDataSuccessResult(response))
                , catchError((error: any) => of(error))
            ))));
    
}
