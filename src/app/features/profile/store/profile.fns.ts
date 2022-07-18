import { ProfileApiResponse, ProfileApiResult } from '../interfaces/profile-api';
import { UserProfile } from '@interfaces';
import { upsertProfiles } from '@features/profile/store/profile.actions';
import { Action } from '@ngrx/store';

export function parseUserProfilesFromApiResponse (response: ProfileApiResponse): Action {

    return upsertProfiles({
        profiles: response.results.map((result: ProfileApiResult) => (<UserProfile>{
            cellNumber: result.cell,
            city: result.location.city,
            dateOfBirth: result.dob.date,
            email: result.email,
            firstName: result.name.first,
            lastName: result.name.last,
            phoneNumber: result.phone,
            picture: result.picture.thumbnail,
            state: result.location.state,
            username: result.login.username
        }))

    });

}
