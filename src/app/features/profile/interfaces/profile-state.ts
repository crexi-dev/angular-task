import { UserProfile } from './user-profile';

export interface ProfileState {
    selectedUser: number;
    users: UserProfile[];
}
