import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, UserProfile } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	baseUrl: string = 'https://randomuser.me/api/';
	constructor(private http: HttpClient) { }

	getProfile(id?: string): Observable<UserProfile> {
		return this.http.get<ApiResponse>(this.baseUrl)
			.pipe(map(res => ({
				cellNumber: res.results[0].phone ,
				city: res.results[0].location.city ,
				dateOfBirth: res.results[0].dob.date ,
				email: res.results[0].email ,
				firstName: res.results[0].name.first ,
				lastName: res.results[0].name.last ,
				phoneNumber: res.results[0].phone ,
				picture: res.results[0].picture.medium ,
				state: res.results[0].location.state ,
			})))
			//.subscribe(console.log)
	}

}
