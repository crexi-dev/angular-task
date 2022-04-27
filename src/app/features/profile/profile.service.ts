import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserProfile } from './interfaces';
import { RandomUserApiResponse, RandomUserApiUserData } from './interfaces/randomuser-payload';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    apiRoot: string = "https://randomuser.me/api/"

    constructor(private http: HttpClient) { }

    /**
     * Retrieve a list of user profiles
     */
     list() {
        return this.http
        .get<RandomUserApiResponse>( this.apiRoot, { params: { results: 10} } )
        .pipe<UserProfile[]>(
            map(
                response => response.results.map( 
                    randomUser => this.formatUserProfile( randomUser ) 
                )
            )
        );
    }

    /**
     * Retrieve a single user profile
     */
    retrieve() {

        return this.http
        .get<RandomUserApiResponse>( this.apiRoot )
        .pipe<UserProfile>(
            map(
                response => this.formatUserProfile(response.results[0])
            )
        );

    }

    /**
     * Convert from RandomUserAPI profile format to CREXI format
     */
    formatUserProfile(randomUser: RandomUserApiUserData):UserProfile {
        
        const u = randomUser;
        
        return {
            cellNumber: u.cell,
            city: u.location.city,
            dateOfBirth: u.dob.date,
            email: u.email,
            firstName: u.name.first,
            lastName: u.name.last,
            phoneNumber: u.phone,
            picture: u.picture.medium,
            state: u.location.state,
        }

    }

}
