import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProfile } from "@interfaces";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GetRandomUsersResponse } from "../interfaces/get-random-users-response";
import { RandomUser } from "../interfaces/random-user";

@Injectable({
    providedIn: "root",
})
export class RandomUserService {
    private readonly url: string = "https://randomuser.me/api/";

    constructor(private httpClient: HttpClient) {}

    public GetRandomUsers(numberOfResults: number): Observable<UserProfile[]> {
        // Default to return a single user
        if (!numberOfResults) {
            numberOfResults = 1;
        }

        let params = { results: numberOfResults.toString() }; 

        return this.httpClient.get(this.url, { params: params }).pipe(
            map((response: GetRandomUsersResponse) => {
                // Map API results to user profiles
                return response.results.map((u: RandomUser) =>
                    this.MapToUserProfile(u)
                );
            })
        );
    }

    private MapToUserProfile(user: RandomUser): UserProfile {
        return <UserProfile>{
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: user.dob.date,
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state,
        };
    }
}
