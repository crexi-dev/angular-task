import { UserProfile } from './user-profile';

export interface ProfileState {
    selectedUser?: UserProfile;
    randomUsers: UserProfile[];
}
