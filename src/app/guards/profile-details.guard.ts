import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserDetailsById, hasUserProfileLoaded } from '@store/selectors';
import { Observable } from 'rxjs';
import {  map, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfileDetailsGuard implements CanActivate {

    constructor (private store: Store<AppState>, private router: Router) {}

    canActivate (): Observable<boolean> {

        return this.store.pipe(
            select(hasUserProfileLoaded),
            tap((loaded) => {

                if (!loaded) {

                    this.store.dispatch(profileActions.loadProfiles());

                }

            }),
            withLatestFrom(this.store.select(getUserDetailsById)),
            tap(([_, userDetails]) => {

                if (!userDetails) {

                    this.router.navigate(['/profiles']);

                }

            }),
            map(() => true)
        );

    }

}
