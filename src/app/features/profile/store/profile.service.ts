import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, UserProfile } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	randomUrl: string = 'https://randomuser.me/api/';
	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=10';
	constructor(private http: HttpClient) { }

	getProfile(id?: string): Observable<UserProfile | undefined> {
		console.log(id)
		return this.http.get<ApiResponse>(id ? this.seededUrl : this.randomUrl)
			.pipe(map(res => 
				{
					if (!id) return {
						id: res.results[0].id.value,
						cellNumber: res.results[0].phone ,
						city: res.results[0].location.city ,
						dateOfBirth: res.results[0].dob.date ,
						email: res.results[0].email ,
						firstName: res.results[0].name.first ,
						lastName: res.results[0].name.last ,
						phoneNumber: res.results[0].phone ,
						picture: res.results[0].picture.medium ,
						state: res.results[0].location.state ,
					}
					console.log(res.results)
					const profile = res.results.find(u => u.id.value === id);
					if (!profile) return undefined;
					return {
						id: profile.id.value,
						cellNumber: profile.phone ,
						city: profile.location.city ,
						dateOfBirth: profile.dob.date ,
						email: profile.email ,
						firstName: profile.name.first ,
						lastName: profile.name.last ,
						phoneNumber: profile.phone ,
						picture: profile.picture.medium ,
						state: profile.location.state ,
					}
				}
			))
	}

}
