import { UserProfile } from './user-profile';

export interface ProfileState {
    users: UserProfile[];
    user?: UserProfile;
}