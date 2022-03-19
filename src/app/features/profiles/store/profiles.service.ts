import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, apiResultToUserProfile, UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProfilesService {

	// SEED URL IS USED TO BE ABLE TO REFRESH ON A PROFILE WITH AN ID AND GET THE DATA
	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=100';
	constructor(private http: HttpClient) { }

	/**
	 * Gets 10 random profiles from api.
	 * @returns `UserProfile[]`
	 */
	getProfiles(): Observable<UserProfile[]> {
		return this.http.get<ApiResponse>(this.seededUrl)
			.pipe(map(res => this.chooseRandom(res.results.map(r => apiResultToUserProfile(r)))))
	}

	// CODE FROM https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array
	/**
	 * Select elements at random from `array`
	 * @param array to pick elements from
	 * @param num number of elements to pick from array
	 * @returns `UserProfile[]`
	 */
	private chooseRandom(array: UserProfile[], num = 10) {
		const res = [];
		for(let i = 0; i < num;) {
			const random = Math.floor(Math.random() * array.length);
			if(res.indexOf(array[random]) !== -1){
				continue;
			};
			res.push(array[random]);
			i++;
		};
		return res;
	};
}
