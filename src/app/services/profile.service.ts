import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  public getRandomUsers(): Observable<UserProfile[]> {
    return this.http.get('https://randomuser.me/api/?results=10').pipe(
      map((data: any) => {
        const users: UserProfile[] = [];
        for(let i=data.results.length; i > 0; i--) {
          const row = data.results[i-1];
          users.push({
            id: `${i}`,
            cellNumber: row.cell,
            city: row.location.city,
            dateOfBirth: row.dob.date,
            email: row.email,
            firstName: row.name.first,
            lastName: row.name.last,
            phoneNumber: row.phone,
            picture: row.picture.large,
            state: row.location.state,
          });
        }
        return users;
      })
    );
  }
}
