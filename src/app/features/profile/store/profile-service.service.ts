import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // TODO:NULL CHECKS

  constructor(private http: HttpClient) { }

  getProfileList(count: number): Observable<UserProfile[]>{
    return this.http.get<{ info: any, results: UserProfile[] }>(environment.profileUrl + '?results=' + count)
      .pipe(map(response => response.results.map(this.dataMapper)));
  }

  getRandomProfile(): Observable<UserProfile>{    
    const seed = new Date().getTime();
    return this.http.get<{ info: any, results: UserProfile[] }>(environment.profileUrl + '?seed=' + seed)
      .pipe(map(response => this.dataMapper(response.results[0])));
  }

  private dataMapper(data: any): UserProfile {    
    return {     
      cellNumber: data.cell,
      city: data.location?.city,
      dateOfBirth: data.dob?.date,
      email: data.email,
      firstName: data.name?.first,
      lastName: data.name?.last,
      phoneNumber: data.phone,
      picture: data.picture?.medium,
      state: data.location?.sate
    }
  }
}
