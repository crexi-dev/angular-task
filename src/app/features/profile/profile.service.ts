import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { IProfile, IProfileDTO } from './interfaces/profile-dto';
import { UserProfile } from '@interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private url: string = `https://randomuser.me/api/`;

    /**
     * Map DTO from external API to client model.
     */
    private mapProfileDtoToUserProfile (profileDTOList: IProfile[]): UserProfile[] {

        const profileList: UserProfile[] = [];
        profileDTOList.forEach((profileDTO) => {

            const profile: UserProfile = {
                cellNumber: profileDTO.cell,
                city: profileDTO.location.city,
                dateOfBirth: profileDTO.dob.date,
                email: profileDTO.email,
                firstName: profileDTO.name.first,
                id: profileDTO.login.uuid,
                lastName: profileDTO.name.last,
                phoneNumber: profileDTO.phone,
                picture: profileDTO.picture.large,
                state: profileDTO.location.state
            };
            profileList.push(profile);

        });

        return profileList;

    }

    constructor (private httpClient: HttpClient) { }

    /**
     * Get a randomized profile. Use `shareReplay` to turn cold observable hot.
     */
    public getProfile (): Observable<UserProfile> {

        return this.httpClient.get<IProfileDTO>(this.url).pipe(
            map((profileDTO) => {

                const [userProfile] = this.mapProfileDtoToUserProfile(profileDTO.results);
                return userProfile;

            }),
            shareReplay()
        );

    }

    /**
     * Get a list of 10 randomized profiles. Use `shareReplay` to turn cold observable hot.
     */
    public getProfileList (): Observable<UserProfile[]> {

        let params = new HttpParams();
        params = params.append('results', '10');

        return this.httpClient.get<IProfileDTO>(this.url, { params }).pipe(
            map((profileDTO) => {

                return this.mapProfileDtoToUserProfile(profileDTO.results);

            }),
            shareReplay()
        );

    }

}
