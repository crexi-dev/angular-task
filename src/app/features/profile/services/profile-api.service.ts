// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { RandomUserAPIResponsePayload } from '@interfaces';

// RxJS
import { Observable } from 'rxjs';

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
    getOneProfile (): Observable<RandomUserAPIResponsePayload> {

        return this.http.get<RandomUserAPIResponsePayload>('https://randomuser.me/api/');
    
    }

    /**
     * Gets a list of profiles from the backend.
     */
    getProfileList (): Observable<RandomUserAPIResponsePayload> {

        return this.http.get<RandomUserAPIResponsePayload>('https://randomuser.me/api/?page=3&results=10');
  
    }

}
