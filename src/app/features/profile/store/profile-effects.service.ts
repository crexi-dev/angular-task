import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { getProfileList } from './profile.actions';
import { Action } from '@ngrx/store';
import { ProfileService } from './profile.service';
import { parseUserProfilesFromApiResponse } from './profile.fns';

@Injectable()
export class ProfileEffects implements OnInitEffects {

    getProfileList$ = createEffect(() => this.actions$.pipe(
        ofType(getProfileList),
        switchMap(() => this.profileService.getProfileList$().pipe(map(parseUserProfilesFromApiResponse)))
    ));

    constructor (private actions$: Actions, private profileService: ProfileService) {
    }

    ngrxOnInitEffects (): Action {

        return getProfileList();

    }

}
