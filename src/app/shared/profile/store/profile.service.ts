import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserProfile, UserProfile } from '@interfaces';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor (private http: HttpClient) {}

  randomUserOptions = '?results=10'
  randomUserEndpoint = 'https://randomuser.me/api/';

  getRandomUsers(): Observable<RandomUserProfile[]>{
    return this.http.get(this.randomUserEndpoint + this.randomUserOptions) as Observable<RandomUserProfile[]>;
  }

  convertRandomUsersToUserProfiles(randomUserProfiles: any): UserProfile[] {
    randomUserProfiles = randomUserProfiles.results;

    const userProfiles = randomUserProfiles.map((randomUserProfile: RandomUserProfile) => ({ 
        id: randomUserProfile.login.uuid,
        cellNumber: randomUserProfile.cell,
        city: randomUserProfile.location.city,
        dateOfBirth: randomUserProfile.dob.date,
        email: randomUserProfile.email,
        firstName: randomUserProfile.name.first,
        lastName: randomUserProfile.name.last,
        phoneNumber: randomUserProfile.phone,
        picture: randomUserProfile.picture.thumbnail,
        state: randomUserProfile.location.state,
      })
    );
    
    console.dir(userProfiles);

    return userProfiles;
  }

}