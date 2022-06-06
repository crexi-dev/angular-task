import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { Logger, LogLevel } from 'src/app/shared/logger';
import { profileActions } from '../store/profile.actions';
import { take } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class UserProfileGuard implements CanActivate {

    logger = new Logger('UserProfileGuard', LogLevel.DEBUG);
    profiles$: Observable<any>;

    constructor (private store: Store<AppState>, private router: Router) { }

    canActivate (route: ActivatedRouteSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.profiles$ = this.store.select((store) => store.profiles.users);

        const attemptedUserID = route.params.id;

        // Verify / Get user specific details
        // In a real application this would probably be more complicated depending on how the API is set up,
        // In this demo, we'll just find the user in the most simplest way
        this.profiles$.pipe(take(1)).subscribe((users) => {

            if (users && users.length > 0) {

                const foundUser = users.find((user: UserProfile) => user.id === attemptedUserID);
                if (foundUser) {

                    this.logger.debug('Found user', foundUser);
                    // Update the selected user in the store
                    this.store.dispatch(profileActions.selectUserProfile(foundUser));

                }

            } else {

                if (attemptedUserID) {

                    // If a userId Param was used, we assume that param wrong because this data is randomly
                    // generated each load, there is no way our user knows a correct ID ahead of time,
                    // this would be different in real data
                    this.logger.debug('This user no longer exists');
                    this.router.navigate(['/', 'profile-list']);

                } else {

                    this.logger.debug('No users exist, load profiles ( which sets a selects a random user by default)');
                    this.store.dispatch(profileActions.loadProfiles());

                }

            }

        });

        return true;

    }

}
