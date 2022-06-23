import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor (private _http: HttpClient) {
    }

    getProfile (results: number = 1) {

        return this._http.get<any>('https://randomuser.me/api', { params: { results } });
    
    }

}
