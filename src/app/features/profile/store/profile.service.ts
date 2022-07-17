import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileApiResponse } from '@features/profile/interfaces/profile-api';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor (private http: HttpClient) {

    }

    getProfileList$ (): Observable<ProfileApiResponse> {

        return this.http.get<ProfileApiResponse>('https://randomuser.me/api/?results=10');

    }

}
