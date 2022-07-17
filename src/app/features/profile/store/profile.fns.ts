import { ProfileApiResponse, ProfileApiResult } from '../interfaces/profile-api';
import { UserProfile } from '@interfaces';
import { upsertProfiles } from '@features/profile/store/profile.actions';
import { Action } from '@ngrx/store';

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nove', 'Dec'];

/**
 * https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th
 * @param d
 */
export function daySuffix (d: number): string {

    if (d > 3 && d < 21) {

        return 'th';

    }

    switch (d % 10) {

        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';

    }

}

export function formatDate (d: Date): string {

    return `${month[d.getMonth()]} ${d.getDate()}${daySuffix(d.getDate())}, ${d.getFullYear()}`;

}

export function parseUserProfilesFromApiResponse (response: ProfileApiResponse): Action {

    return upsertProfiles({
        profiles: response.results.map((result: ProfileApiResult) => (<UserProfile>{
            cellNumber: result.cell,
            city: result.location.city,
            dateOfBirth: formatDate(new Date(result.dob.date)),
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
