import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProfilesService {

	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=10';
	constructor(private http: HttpClient) { }

	getProfiles(): Observable<UserProfile[]> {
		return this.http.get<ApiResponse>(this.seededUrl)
			.pipe(map(res => res.results.map(r => ({
				id: r.id.value,
				cellNumber: r.phone ,
				city: r.location.city ,
				dateOfBirth: r.dob.date ,
				email: r.email ,
				firstName: r.name.first ,
				lastName: r.name.last ,
				phoneNumber: r.phone ,
				picture: r.picture.medium ,
				state: r.location.state ,
			}))))
	}

}
