import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProfileService} from "@api/profile.service";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {profileActions} from "./profile.actions";
import {UserProfile} from "@interfaces";
import {ApiUserProfile} from "@api/types";

@Injectable()
export class ProfileEffects {

    searchProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.searchProfile),
            switchMap(({page, limit}) => {
               return this.profileService.getProfiles({page, limit}).pipe(
                   map((res) => {
                       const entities = res.results.map(entity => this.fromDto(entity));
                       return profileActions.searchProfileSuccess({ entities })
                   }),
                   catchError(error => of(profileActions.searchProfileFailed({error})))
               )
            })
        )
    )

    fromDto(entity: ApiUserProfile): UserProfile {
        return {
            firstName: entity.name.first,
            lastName: entity.name.last,
            phoneNumber: entity.phone,
            picture: entity.picture.medium,
            cellNumber: entity.cell,
            dateOfBirth: entity.dob.date,
            email: entity.email,
            city: entity.location.city,
            state: entity.location.state,
        }
    }
    constructor (private actions$: Actions, private profileService: ProfileService) {}
}
