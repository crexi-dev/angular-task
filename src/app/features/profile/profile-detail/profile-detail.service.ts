import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { uniqueId } from 'lodash';
import { RandomUserResult, RandomUserResultUser } from '../interfaces/random-user';
import { UserProfile } from '../interfaces';

@Injectable()
export class ProfileDetailService {

    static randomUserResultUserToUserProfile (randomUserResultUser: RandomUserResultUser): UserProfile {
        
        return {
            cellNumber: randomUserResultUser?.cell,
            city: randomUserResultUser?.location?.city,
            dateOfBirth: randomUserResultUser?.dob.date,
            email: randomUserResultUser?.email,
            firstName: randomUserResultUser.name?.first,
            id: uniqueId(),
            lastName: randomUserResultUser.name?.last,
            phoneNumber: randomUserResultUser?.phone,
            picture: randomUserResultUser?.picture.thumbnail,
            state: randomUserResultUser?.location?.state
        };

    }

    constructor (private http: HttpClient) { }

    fetchProfile (): Observable<UserProfile | undefined> {

        const url = 'https://randomuser.me/api/';

        return this.http.get(url).pipe(
            map((result: RandomUserResult) => this.transformRandomUserResult(result)),
            catchError((err) => {
                
                console.log(err);
                return of(undefined);

            })
        );

    }

    /**
     * Transform API response to a single UserProfile object
     * 
     * @param result 
     * @returns UserProfile
     */
    private transformRandomUserResult (result: RandomUserResult): UserProfile | undefined {

        const r = Array.isArray(result?.results) ? result.results[0] as RandomUserResultUser : undefined;

        if (!r) {

            return undefined;

        }

        return ProfileDetailService.randomUserResultUserToUserProfile(r);

    }
    
}
