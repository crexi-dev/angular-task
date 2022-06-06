import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { Logger, LogLevel } from 'src/app/shared/logger';
import { profileActions } from '../store/profile.actions';
@Injectable({
    providedIn: 'root'
})
export class UserProfileGuard implements CanActivate {
    logger = new Logger('UserProfileGuard', LogLevel.DEBUG);
    profiles$: Observable<any>;

    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.profiles$ = this.store.select((store) => store.profiles.users);

        const attemptedUserID = route.params.id;

        // Verify / Get user specific details
        // In a real application this would probably be more complicated depending on how the API is set up,
        // In this demo, we'll just find the user in the most simplest way
        this.profiles$.subscribe((res) => {

            if (res && res.userProfiles) {

                const foundUser = res.userProfiles.find((user: UserProfile) => user.id === attemptedUserID);
                if (foundUser) {

                    this.logger.debug('Found user', foundUser);
                    // Set that user in the store
                    this.store.dispatch(profileActions.selectUserProfile(foundUser));

                } else {

                    // User does not exist in our pool ( of course in )
                    return false;

                }

            } else {

                this.logger.debug('No users exist, go back to list');
                this.router.navigate(['/','profile-list']);

            }

        });

        console.log(route, state, attemptedUserID);
        return true;

    }




}
