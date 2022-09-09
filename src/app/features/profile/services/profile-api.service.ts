// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileApiService {
  
    /**
     * Constructor
     * @param {HttpClient} http Angular HTTP Client
     */
    constructor (private http: HttpClient) {}

    /**
     * Gets one user profile from the backend.
     */
    getOneProfile () {

        return this.http.get('https://randomuser.me/api/');
    
    }

    /**
     * Gets a list of profiles from the backend.
     */
    getProfileList () {

        return this.http.get('https://randomuser.me/api/?page=3&results=10');
  
    }

}
