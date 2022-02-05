import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { profileActions } from '@store/actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProfileService } from './profile-service.service';

@Injectable()
export class ProfileEffects {
    
    constructor (private actions$: Actions, private profileService: ProfileService) {}

    getProfileList$ = createEffect(() => 
        this.actions$.pipe(
            ofType(profileActions.getProfileList),           
            mergeMap(action => this.profileService.getProfileList(action.count).pipe(
                map(profileList => profileActions.getProfileListSuccess({ profileList: profileList })),  
                catchError(() => of(profileActions.getProfileListError({ error: 'Could not get profile list.' })))                 
            )
        ))
    ); 

    getRandomProfile$ = createEffect(() => 
    this.actions$.pipe(
        ofType(profileActions.getRandomProfile),           
        mergeMap(() => this.profileService.getRandomProfile().pipe(
            map(profile => profileActions.getRandomProfileSuccess({ profile: profile })),  
            catchError(() => of(profileActions.getProfileListError({ error: 'Could not get random profile.' })))                 
        )
    ))
); 
}
