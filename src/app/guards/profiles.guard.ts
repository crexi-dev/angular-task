import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { tap, filter, first } from 'rxjs/operators';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { profileActions } from '@store/actions';
import { hasUserProfileLoaded } from '@store/selectors';

@Injectable({
    providedIn: 'root'
})
export class ProfilesGuard implements CanActivate {

    constructor (private store: Store<AppState>) {}

    canActivate (): Observable<boolean> {

        return this.store.pipe(
            select(hasUserProfileLoaded),
            tap((loaded) => {

                if (!loaded) {

                    this.store.dispatch(profileActions.loadProfiles());

                }

            }),
            filter((loaded) => loaded),
            first()
        );

    }

}
