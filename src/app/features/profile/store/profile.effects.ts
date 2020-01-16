import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { RandomUserGenService } from '@core/services/random-user-gen/random-user-gen.service';
import { profileActions } from '@store/actions';
import { UserProfilesDto } from '@interfaces';

@Injectable()
export class ProfileEffects {

    public loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.loadUsers),
            switchMap(() =>
                this.rugs.getRandomUsers(10).pipe(
                    map((users: UserProfilesDto) => profileActions.loadUsersSuccess({ users })),
                    catchError(error => of(profileActions.loadUsersFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions<Action>, private rugs: RandomUserGenService) {}
}