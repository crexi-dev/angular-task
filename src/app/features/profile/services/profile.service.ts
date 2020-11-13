import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '@interfaces';
import { HttpClient } from '@angular/common/http';
import { ApiResult, UserObject } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private url = 'https://randomuser.me/api';

    mapFunction(apiObject: ApiResult): UserProfile[] {
        let counter = 1;
        const object = apiObject.results.map((item: UserObject) => {
            const { cell, phone, picture, name, location, email } = item;
            const returnObject = {
                id: counter,
                cellNumber: cell,
                city: location.state,
                email,
                firstName: name.first,
                lastName: name.last,
                phoneNumber: phone,
                picture: picture.thumbnail,
                state: location.state
            };
            counter++;
            return returnObject;
        });
        console.log(object);
        return object;
    }

    mapOne(apiObject: ApiResult): UserProfile {
        const item = apiObject.results[0];
        const { cell, phone, picture, name, location, email } = item;
        const returnObject = {
            cellNumber: cell,
            city: location.state,
            email,
            firstName: name.first,
            lastName: name.last,
            phoneNumber: phone,
            picture: picture.thumbnail,
            state: location.state
        };
        console.log(returnObject);
        return returnObject;
    }
    constructor(private http: HttpClient) {}

    public getOneProfile(): Observable<UserProfile> {
        return this.http.get<ApiResult>(this.url).pipe(
            map((res: ApiResult) => {
                return this.mapOne(res);
            })
        );
    }

    public getProfiles(): Observable<UserProfile[]> {
        return this.http.get<ApiResult>(`${this.url}/?results=10`).pipe(
            map((res: ApiResult) => {
                return this.mapFunction(res);
            })
        );
    }
}
