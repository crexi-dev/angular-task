import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIUserToUserProfile } from '../utils/api-user-to-user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BASE_URL = 'https://randomuser.me/api/'

  constructor(private http: HttpClient) { }

  fetchUserProfile(): Observable<UserProfile[]> {
    return this.http.get<APIResponse>(this.BASE_URL)
      .pipe(map(({ results }) => results.map(user => APIUserToUserProfile(user))));
  };

  fetchUsereProfiles(): Observable<UserProfile[]> {
    const params = new HttpParams({
      fromObject: {results: 10 }
   })

    return this.http.get<APIResponse>(this.BASE_URL, { params })
      .pipe(map(({ results }) => results.map(user => APIUserToUserProfile(user))));
  }
}
