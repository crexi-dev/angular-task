import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { DataService } from "../../services/data.service";
import {profileActions} from './profile.actions';

@Injectable()
export class ProfileEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    fetchProfile$ = createEffect(()=>
    this.actions$.pipe(
        ofType(profileActions.fetchProfile),
        exhaustMap(action=> 
            this.dataService.getProfile().pipe(
                map(response => profileActions.fetchProfileSuccess(response)),
                catchError((error: any) => of(profileActions.fetchProfileFailure(error)))
            )
            )
    ) 
    )

    fetchProfileList$ = createEffect(()=>
    this.actions$.pipe(
        ofType(profileActions.fetchProfileList),
        exhaustMap(action=> 
            this.dataService.getProfileList().pipe(
                map(response => profileActions.fetchProfileSuccessList(response)),
                catchError((error: any) => of(profileActions.fetchProfileFailureList(error)))
            )
            )
    ) 
    )
}