import { UserProfile } from './user-profile';

// modify state to include a single random profile (for when no id is provided), 
// and an array of profiles (for the list of 10)
export interface ProfileState {
    allProfiles: {
        error: string;
        isLoaded: boolean;
        profiles: UserProfile[];
    };
    randomProfile: {
        error: string;
        isLoaded: boolean;
        profile: UserProfile;
    };
}
