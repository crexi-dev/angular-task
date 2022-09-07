import { UserProfile } from './user-profile';

export interface ProfileState {
    users: UserProfile[];
    selectedUuid?: string;
    error?: string;
}
