import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, apiResultToUserProfile, UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProfilesService {

	seededUrl: string = 'https://randomuser.me/api/?seed=control&results=100';
	constructor(private http: HttpClient) { }

	getProfiles(): Observable<UserProfile[]> {
		return this.http.get<ApiResponse>(this.seededUrl)
			.pipe(map(res => this.chooseRandom(res.results.map(r => apiResultToUserProfile(r)))))
	}

	// CODE FROM https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array
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
