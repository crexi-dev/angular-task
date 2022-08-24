import { UserProfile } from './user-profile';

export interface ProfileState {
    profileDetailState: ProfileDetailState;
    profileListState: ProfileListState;
}

export interface ProfileDetailState {
    user?: UserProfile;
    status: 'loading' | 'success' | 'error';
    errorMessage?: string;
}

export interface ProfileListState {
    profileList: UserProfile[];
    status: 'loading' | 'success' | 'error';
    errorMessage?: string;
}
