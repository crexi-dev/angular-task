import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    isLoading?: boolean;
    error: string;
}
