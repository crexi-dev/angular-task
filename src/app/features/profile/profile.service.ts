import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileRawResponse } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    userUrl: string = 'https://randomuser.me/api/?results=';

    constructor (private _http: HttpClient) {}

    getUsers (limit = 1): Observable<IUserProfileRawResponse> {

        const url = `${this.userUrl}${limit}`;
        return this._http.get<IUserProfileRawResponse>(url);
    
    }

}
