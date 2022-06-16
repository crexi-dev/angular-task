import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserProfileResults, UserProfile, UserProfileResponse } from '../interfaces';

@Injectable()
export class ProfileService {
    
    constructor (private http: HttpClient) {}

    getUserProfile () : Observable<UserProfile> {

        return this.http.get<UserProfileResponse>('https://randomuser.me/api/').pipe(map((res) => {
              
            const userResults = res?.results[0];
            return <UserProfile>{
                cellNumber: userResults.cell,
                city: userResults.location.city,
                dateOfBirth: userResults.dob.date,
                email: userResults.email,
                firstName: userResults.name.first,
                lastName: userResults.name.last,
                phoneNumber: userResults.phone,
                picture: userResults.picture.thumbnail
            };

        }));

    }

    getUserProfileList () : Observable<UserProfile[]> {

        return this.http.get<UserProfileResponse>('https://randomuser.me/api/?page=3&results=10&seed=abc')
        .pipe(map((res) => this.getFormattedUserProfileList(res?.results)));

    }

    private getFormattedUserProfileList (userProfileList: IUserProfileResults[]):  UserProfile[] {

        if(!userProfileList?.length) {

            return [];

        }
        const formattedUserProfileList: UserProfile[] = [];
        for(let i = 0; i < userProfileList.length; i++) {

            formattedUserProfileList.push(<UserProfile>{
                cellNumber: userProfileList[i].cell,
                city: userProfileList[i].location.city,
                dateOfBirth: userProfileList[i].dob.date,
                email: userProfileList[i].email,
                firstName: userProfileList[i].name.first,
                lastName: userProfileList[i].name.last,
                phoneNumber: userProfileList[i].phone,
                picture: userProfileList[i].picture.thumbnail
            });
            
        }
        return formattedUserProfileList;

    }

}
