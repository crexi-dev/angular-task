import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserProfile } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private profileUrl: string = 'https://randomuser.me/api/?results=';

    constructor (private http: HttpClient) { }

    // get 10 random profiles
    getProfiles (): Observable<UserProfile[]> {

        return this.http.get<UserProfile[]>(this.profileUrl + 10)
        .pipe(
            map((results) => this.mapProfileData(results)),
            catchError(this.handleError)
        );
    
    }

    // get one random profile
    getRandomProfile (): Observable<UserProfile> {

        return this.http.get<UserProfile[]>(this.profileUrl + 1)
        .pipe(
            // get the first element of the array since there will only ever be one 
            map((results) => this.mapProfileData(results)[0]), 
            catchError(this.handleError)
        );
    
    }

    // map data from the API to match type UserProfile 
    mapProfileData (results: any): UserProfile[] {

        const userProfiles: UserProfile[] = [];
        for (const i of results.results) {

            userProfiles.push({
                cellNumber: i.cell,
                city: i.location.city,
                dateOfBirth: i.dob.date, 
                email: i.email,
                firstName: i.name.first,
                id: results.results.indexOf(i) + 1,
                lastName: i.name.last,
                phoneNumber: i.phone,
                picture: i.picture.large,
                state: i.location.state
            });
        
        }
        return userProfiles;
    
    }

    handleError (error: any) {

        console.log(error);
        return throwError(JSON.stringify(error));
    
    }

}
