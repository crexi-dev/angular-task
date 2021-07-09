import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { UserProfile } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   //url = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  getProfiles(){
    return this.http.get('https://randomuser.me/api/');
  }
}
