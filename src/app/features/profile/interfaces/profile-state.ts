import { UserProfile } from './user-profile';
import { UserProfileMap } from './user-profile-map';

export interface ProfileState {
    user?: UserProfile;
    usersMap: UserProfileMap;
}
