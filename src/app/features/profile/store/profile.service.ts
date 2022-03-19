import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, apiResultToUserProfile, UserProfile } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	randomUrl: string = 'https://randomuser.me/api/';
	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=100';
	constructor(private http: HttpClient) { }

	getProfile(id?: string): Observable<UserProfile | undefined> {
		console.log(id)
		return this.http.get<ApiResponse>(id ? this.seededUrl : this.randomUrl)
			.pipe(map(res => 
				{
					if (!id) return apiResultToUserProfile(res.results[0]);
					console.log(res.results)
					const profile = res.results.find(u => u.name.first + u.name.last === id);
					if (!profile) return undefined;
					return apiResultToUserProfile(profile)
				}
			))
	}

}
