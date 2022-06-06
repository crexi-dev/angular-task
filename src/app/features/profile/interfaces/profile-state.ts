import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    users?: UserProfile[];
    // TODO: If there was enough time I'd plumb this through and tie a material spinner to it.
    isLoading: boolean;
}
