import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile } from './interfaces';

// TODO: Should exist in a shared contract interface library between API/Frontend
interface RandomUserResponse {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
    };
    email: string;
    login: {
        uuid: string;
        username: string;
    };
    dob: {
        date: Date;
    };
    phone: string;
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

@Injectable({ providedIn: 'root' })
export class ProfileService {

    // TODO: Store in a better manner
    private randomUserApiRoute = 'https://randomuser.me/api/';
    constructor (private http: HttpClient) {}

    getRandomUser (): Observable<UserProfile> {

        return this.http
        .get(this.randomUserApiRoute)
        .pipe(map((response: { info: any, results: RandomUserResponse[] }) =>
            this.convertRandomUserToProfile(response.results[0])));

    }

    getRandomUsers (count: number = 10): Observable<UserProfile[]> {

        return this.http
        .get(this.randomUserApiRoute + `?results=${count}`)
        .pipe(map((response: { info: any, results: RandomUserResponse[] }) =>
            response.results.map((profile) => this.convertRandomUserToProfile(profile))));

    }

    // TODO: Data validation
    convertRandomUserToProfile (randomUser: RandomUserResponse): UserProfile {

        return {

            cellNumber: randomUser.cell,
            city: randomUser.location.city,
            dateOfBirth: randomUser.dob.date.toString(),
            email: randomUser.email,
            firstName: randomUser.name.first,
            id: randomUser.login.uuid,
            lastName: randomUser.name.last,
            phoneNumber: randomUser.phone,
            picture: randomUser.picture.large,
            state: randomUser.location.state

        };

    }

}
