import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile } from '../interfaces';
import { UserProfileModel } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {

    private url = 'https://randomuser.me/api';
    constructor (private http$: HttpClient) { }

    public getUserProfile (): Observable<UserProfile> {

      return this.getUserProfiles(1).pipe(
      map((users: UserProfile[]) => users[0])
    );

  }

    public getUserProfiles (count: number): Observable<UserProfile[]> {

      return this.http$.get<any>(`${this.url}/?results=${count}`).pipe(
      map((data: any) => data.results.map((element: any) => new UserProfileModel(element)))
    );

  }

}
