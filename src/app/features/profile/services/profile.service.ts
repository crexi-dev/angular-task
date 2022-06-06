import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor (private http: HttpClient) { }

    getProfiles () {

        return this.http.get('https://randomuser.me/api/?results=10');

    }

}
