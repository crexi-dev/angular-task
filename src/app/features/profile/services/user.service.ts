import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string ='https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(users:number = 1) {
    return this.http.get<{ [key: string]: any[] }>(this.apiUrl+`?results=${users}`)
      .pipe(
        map(data => data.results.map(apiUser => this.mapUser(apiUser)))
      )
  }

  mapUser(apiUser: any) {
    return {
      id: apiUser.login.uuid,
      cellNumber: apiUser.cell,
      city: apiUser.location.city,
      dateOfBirth: formatDate(apiUser.dob.date, 'MMM d, y', 'en-US'),
      email: apiUser.email,
      firstName: apiUser.name.first,
      lastName: apiUser.name.last,
      phoneNumber: apiUser.phone,
      avatar: apiUser.picture.thumbnail,
      picture: apiUser.picture.large,
      state: apiUser.location.state
    }; 
  }
}