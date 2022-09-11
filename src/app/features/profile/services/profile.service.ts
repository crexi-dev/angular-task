import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor (private http: HttpClient) {}

    getProfiles (): Observable<ApiResponse> {

        return this.http.get<ApiResponse>('https://randomuser.me/api/?results=10');

    }

}
