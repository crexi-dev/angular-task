import { UserProfile } from './user-profile';

export type ProfileRecords = Record<UserProfile['id'], Readonly<UserProfile>>;

export interface ProfileState {
    users?: ProfileRecords;
}
