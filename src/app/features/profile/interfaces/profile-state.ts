import { UserProfile } from './user-profile';

export interface ProfileState {
    error?: string;
    selectedUuid?: string;
    users: UserProfile[];
}
