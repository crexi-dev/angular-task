import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    private reduceToUserProfile (response: any): UserProfile {

        return this.toUserProfile(response.results[0]);

    }

    private toUserProfile (result: any): UserProfile {

        return {
            dateOfBirth: result.dob.date,
            email: result.email,
            firstName: result.name.first,
            lastName: result.name.last,
            phoneNumber: result.phone,
            cellNumber: result.cell,
            picture: result.picture.medium,
            city: result.location.city,
            state: result.location.state
        };

    }

    private toUserProfiles (response: any): UserProfile[] {

        return response.results.map(this.toUserProfile.bind(this));

    }

    constructor (private http: HttpClient) { }

    getManyRandom (): Observable<UserProfile[]> {

        const url = 'https://randomuser.me/api?results=10';
        return this.http.get<any>(url).pipe(
      map<any, UserProfile[]>(this.toUserProfiles.bind(this))
    );

    }

  // NOTE: Used any for development speed.
    getRandom (): Observable<UserProfile> {

        const url = 'https://randomuser.me/api';
        return this.http.get<any>(url).pipe(
      map<any, UserProfile>(this.reduceToUserProfile.bind(this))
    );

    }

}
