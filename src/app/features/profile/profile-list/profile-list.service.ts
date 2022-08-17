import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map as rx_map, catchError } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { RandomUserResult } from '../interfaces/random-user';
import { ProfileDetailService } from '../profile-detail/profile-detail.service';

@Injectable()
export class ProfileListService {

    constructor (private http: HttpClient) { }

    fetchProfiles (size?: number): Observable<UserProfile[]> {
      
        const url = `https://randomuser.me/api/?seed=foobar${isNaN(size) ? '' : `&results=${size}`}`;

        return this.http.get(url).pipe(
            rx_map((result: RandomUserResult) => this.transphormRandomUserResult(result)),
            catchError((err) => {

                console.log(err);
                return of([]);

            })
        );

    }

    /**
     * Transform API response to array of UserProfile objects
     * 
     * @param result 
     * @returns UserProfile[]
     */
    private transphormRandomUserResult (result: RandomUserResult): UserProfile[] {
      
        return result?.results.map((r) => ProfileDetailService.randomUserResultUserToUserProfile(r));

    }

}
