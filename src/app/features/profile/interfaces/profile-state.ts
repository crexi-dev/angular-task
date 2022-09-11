import { UserProfile } from './user-profile';

export interface ProfileState {
    isLoading: boolean;
    allUsers: UserProfile[];
    user?: UserProfile;
    error: boolean;
}
