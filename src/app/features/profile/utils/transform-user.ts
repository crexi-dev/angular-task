import { Profile, ProfileResponse, UserProfile } from '@interfaces';
import { getReadableBirthday } from '@features/profile/utils/get-readable-birthday';

export function transformUser (user: ProfileResponse) : UserProfile {

    const profile: Profile = user.results[0];

    return {
        cellNumber: profile.cell,
        city: profile.location.city,
        dateOfBirth: getReadableBirthday(profile),
        email: profile.email,
        firstName: profile.name.first,
        lastName: profile.name.last,
        phoneNumber: profile.phone,
        picture: profile.picture.large,
        state: profile.location.state
    };

}
