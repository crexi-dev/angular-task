import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ProfileService} from './profile.service'
import {catchError, map, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';

//import { EMPTY } from 'rxjs';


@Injectable()
export class ProfileEffects {
    
    initProfile$ = createEffect(() => this.actions$.pipe(
        ofType('[Profile] Init Profile'),
        mergeMap(() => this.profileService.getRandomProfile()
        .pipe(
            map((data: any) => ({ type: '[Profile] Init Profile Success', payload: data })),
            catchError(() => of({ type: '[Profile] Init Profile Error' }))
        ))
        )
    );     

  constructor(private actions$: Actions, private profileService: ProfileService) {
}
}

