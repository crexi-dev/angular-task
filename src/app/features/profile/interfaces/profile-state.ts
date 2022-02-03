import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    isLoading: boolean;
    entities?: { [key: string]: UserProfile };
    ids?: string[];
    page: number;
    limit: number;
    error: any,
}
