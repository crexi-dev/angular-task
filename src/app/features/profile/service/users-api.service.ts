import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {

    constructor (private http: HttpClient) {
    }

    getUsersList (usersNumber: number = 1): any {
        return this.http.get<any>(`https://randomuser.me/api/?results=${usersNumber}`);
    }
}
