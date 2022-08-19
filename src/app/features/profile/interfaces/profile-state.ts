import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    users?: UserProfile[];
    name?: string;
}
