import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileRecords, ProfileState, setDateOfBirth, UserProfile } from '@interfaces';
import { profileActions } from '@features/profile/store/profile.actions';
import { RANDOM_USER_OBJECT, RANDOM_USER_URL } from '@features/profile/interfaces/random_user';
import { NotificationService } from '@core/notification.service';
import { getUserProfiles } from '@features/profile/store/profile.selectors';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor (
        private _http: HttpClient,
        private _notificationService: NotificationService,
        private _store: Store<AppState>
    ) {

        this.#retrieveProfiles();

    }

    /**
     * Return all UserProfiles.
     */
    get profiles$ (): Observable<UserProfile[]> {

        return this._store.select(getUserProfiles).pipe(
            filter((data) => !!data),
            map((data) => Object.values(data)),
            shareReplay(1)
        );

    }

    /**
     * Return a specific UserProfile by `id`.
     * If no `id` is passed then retrieve a random UserProfile.
     * If the `id` does not return a UserProfile than return `false`.
     * @param {string} id
     */
    getProfile$ (id?: string): Observable<UserProfile | false> {

        return this._store.select(getUserProfiles).pipe(
            filter((data) => !!data),
            map((data) => id ? data[id] : this.#getRandomProfile(data)),
            map((profile) => profile ?? false),
            take(1)
        ) as Observable<UserProfile | false>;

    }

    #getRandomProfile (data: ProfileState['users']) {

        const keys = Object.keys(data);
        const randomIndex = keys[Math.floor(Math.random() * keys.length)];
        return data[randomIndex];

    }

    /**
     * Retrieve profile data from https://randomuser.me and store results.
     * Display a notification on error.
     * @param [count = 10]
     * @private
     */
    #retrieveProfiles (count = 10) {

        const userData: ProfileRecords = {};

        this._http.get<RANDOM_USER_OBJECT>(RANDOM_USER_URL + `&results=${count}`).pipe(
            map((randomUserData) => randomUserData.results),
            map((results) => results.forEach((result) => {

                userData[result.id.value] = {
                    cellNumber: result.cell,
                    city: result.location.city,
                    dateOfBirth: setDateOfBirth(result.dob.date),
                    email: result.email,
                    firstName: result.name.first,
                    id: result.id.value,
                    lastName: result.name.last,
                    phoneNumber: result.phone,
                    picture: result.picture.large,
                    state: result.location.state,
                    thumbnail: result.picture.thumbnail
                } as UserProfile;

            })),
            map(() => userData)
        ).subscribe(
            (users) => this._store.dispatch(profileActions.setProfiles({ users })),
            (errorInfo) => {

                let message: string;

                if (errorInfo instanceof HttpErrorResponse) {

                    message = 'Could not connect to randomuser.me';

                } else if (typeof errorInfo === 'object' && errorInfo.hasOwnProperty('error')) {

                    message = 'Problem retrieving profile data.';

                } else {

                    message = errorInfo.toString();

                }

                this._notificationService.errorMessage$.next(message);

            }
        );

    }

}
