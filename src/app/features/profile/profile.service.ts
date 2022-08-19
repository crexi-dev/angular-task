import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileResults } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private baseUrl = `${environment.apiUrl}`;

    constructor (private http: HttpClient) { 

    }

    getUsers (userCount: number) {

        return this.http.get<ProfileResults>(this.baseUrl, { params: { results: userCount } });

    }

}
