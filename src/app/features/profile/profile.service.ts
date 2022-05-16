import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile, ApiResponse } from './interfaces';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  api = 'https://randomuser.me/api/';
  limit = 10;
  constructor(private http: HttpClient) {}

  getRandomProfile(): Observable<UserProfile> {
    return this.http
      .get<ApiResponse>(
        this.api
      )
      .pipe(map((profile) => profile.results[0]));

  }

  getRandomProfileList(): Observable<UserProfile[]> {
    return this.http
      .get<ApiResponse>(
        this.api, {
          params: {
            results: this.limit
          }
        }
      )
      .pipe(map((profiles) => profiles.results));
  }
}
