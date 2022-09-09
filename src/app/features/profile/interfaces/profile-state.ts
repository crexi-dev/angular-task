// Interfaces
import { UserProfile } from './user-profile';

// Profile state for the store
export interface ProfileState {
    user?: UserProfile;
    userProfileList?: UserProfile[];
}
