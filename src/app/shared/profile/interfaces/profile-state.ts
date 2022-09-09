import { UserProfile } from './user-profile';

export interface ProfileState {
    selectedUser?: UserProfile;
    selectedID?: string;
    randomUsers?: UserProfile[];
}
