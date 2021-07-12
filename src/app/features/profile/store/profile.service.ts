import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { UserProfile } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  getRandomProfiles(): Observable<any>{
    return this.http.get(this.apiUrl);
   }

   
}
