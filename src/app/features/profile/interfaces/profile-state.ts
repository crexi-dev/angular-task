import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    profiles?: UserProfile[];
}
