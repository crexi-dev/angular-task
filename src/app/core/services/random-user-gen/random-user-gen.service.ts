import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as API from './random-user-gen.constants';

@Injectable({
    providedIn: 'root'
})
export class RandomUserGenService {

    constructor (private http: HttpClient) {}

    getRandomUsers (amount: number) {

        return this.http.get(`${API.API_URLS.getUsers(amount)}`).pipe(
            map((users) => {

                return users;

            })
        );

    }

}
