import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    profileList?:Array<{}>
}
