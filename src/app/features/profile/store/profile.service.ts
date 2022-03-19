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
	// SEED URL IS USED TO BE ABLE TO REFRESH ON A PROFILE WITH AN ID AND GET THE DATA
	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=100';
	constructor(private http: HttpClient) { }

	/**
	 * Gets a profile from api. If `id` is provided will get data from seed url.
	 * @param id Optinal
	 * @returns `UserProfile | undefined`
	 */
	getProfile(id?: string): Observable<UserProfile | undefined> {
		return this.http.get<ApiResponse>(id ? this.seededUrl : this.randomUrl)
			.pipe(map(res => 
				{
					if (!id) return apiResultToUserProfile(res.results[0]);
					const profile = res.results.find(u => u.name.first + u.name.last === id);
					if (!profile) return undefined;
					return apiResultToUserProfile(profile)
				}
			))
	}

}
