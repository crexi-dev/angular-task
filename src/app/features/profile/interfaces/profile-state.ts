import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    userList: UserProfile[];
    isLoading: boolean;
}
