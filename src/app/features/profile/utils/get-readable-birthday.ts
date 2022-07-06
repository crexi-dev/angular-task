import { Profile } from '@interfaces';

/**
 * Accepts an ISO date and transforms it into a readable format.
 * e.g., June 26, 1966
 * Note that since it is used for birthdays, the date does not get
 * converted to the user's local time
 * @param profile - the user's profile details (name, email, etc)
 */

export function getReadableBirthday (profile: Profile): string {

    return new Intl.DateTimeFormat('en-us', {
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC',
        year: 'numeric'
    }).format(new Date(profile.dob.date));

}
