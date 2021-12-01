import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProfile } from "@interfaces";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { profileActions } from "@store/actions";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { RandomUserService } from "../services/random-user.service";

@Injectable()
export class ProfileEffects {
    constructor(private actions$: Actions, private profileService: RandomUserService) { 
    }

    @Effect()
    public loadProfiles(): Observable<Action>
    {
        return this.actions$.pipe(
            ofType(profileActions.initProfiles),
            switchMap((action) => this.profileService.GetRandomUsers(action.numberOfResults || 1)),
            map((response: UserProfile[]) => profileActions.initProfilesSuccess({ profiles: response })),
            catchError((error: HttpErrorResponse) => of(profileActions.initProfilesFailure({ error: error })))
        );
    }
}