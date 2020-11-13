import { UserProfile } from './user-profile';

export interface ProfileState {
    loading: boolean;
    selectedProfile?: UserProfile;
    profiles?: UserProfile[];
}
