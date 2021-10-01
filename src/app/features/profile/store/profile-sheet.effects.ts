import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '@features/profile/service/users-api.service';
import { UsersAction } from '@features/profile/store/profile-sheet.actions';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class ProfileSheetEffects {
    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.getUsers),
            mergeMap(() =>
                this.usersAPI.getUsersList(10).pipe(
                    map((data) => UsersAction.getUsersSuccess({payload: data}))
                )
            )
        )
    );

    constructor (private actions$: Actions, private usersAPI: UsersApiService) {
    }
}
