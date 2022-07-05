import { IUserProfile } from './user-profile';

export interface IUserProfileListState {
    data: IUserProfile[];
    loading: boolean;
    loaded: boolean;
}
