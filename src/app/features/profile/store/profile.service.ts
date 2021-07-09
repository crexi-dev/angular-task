import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { UserProfile } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   apiUrl = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  // getRandomProfiles(){
  //   return this.http.get('https://randomuser.me/api/');
  // }
}
