import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  getProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.url}/profiles`);
  }
}
