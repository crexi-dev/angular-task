import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileResponse } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    readonly RANDOM_USER_URL = 'https://randomuser.me/api/';

    fetchUser (): Observable<ProfileResponse> {

        return this.httpClient.get<ProfileResponse>(this.RANDOM_USER_URL);

    }

    fetchUsers (count: number): Observable<ProfileResponse> {

        const params: HttpParams = new HttpParams().set('results', count);
        return this.httpClient.get<ProfileResponse>(this.RANDOM_USER_URL, { params });

    }

    constructor (private httpClient: HttpClient) { }

}
