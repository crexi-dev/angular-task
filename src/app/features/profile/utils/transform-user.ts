import { Profile, ProfileResponse, UserProfile } from '@interfaces';
import { getReadableBirthday } from '@features/profile/utils';
import { v4 as uuidv4 } from 'uuid';

export function transformProfileResponse (user: ProfileResponse): UserProfile[] {

    return user.results.map(transformUser);

}

function transformUser (profile: Profile): UserProfile {

    return {
        cellNumber: profile.cell,
        city: profile.location.city,
        dateOfBirth: getReadableBirthday(profile),
        email: profile.email,
        firstName: profile.name.first,
        id: uuidv4(),
        lastName: profile.name.last,
        phoneNumber: profile.phone,
        picture: profile.picture.large,
        state: profile.location.state
    };

}
