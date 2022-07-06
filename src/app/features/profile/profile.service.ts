import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileResponse } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    fetchUser (): Observable<ProfileResponse> {

        const url = 'https://randomuser.me/api/';
        return this.httpClient.get<ProfileResponse>(url);

    }

    constructor (private httpClient: HttpClient) { }

}
