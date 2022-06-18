import { ILoadUserPayload } from './../interfaces/user-profile';
import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const loadUserProfile = createAction('[Profile] load User profile');

const loadUserProfileList = createAction(
    '[Profile] load User profile List',
    props<{ usersRequest: ILoadUserPayload }>()
);

const loadUserProfileListSucess = createAction(
    '[Profile] load User profile List Success',
    props<{ userProfiles: UserProfile[], page: number,
        pageSize: number }>()
);

const loadUserProfileSuccess = createAction(
    '[Profile] load User profile Success', 
    props<{ userProfile: UserProfile }>()
);
const loadUserProfileError = createAction(
    '[Profile] load User profile Error', 
    props<{ error: string }>()
);

const sortUsers = createAction(
    '[Profile] Sort Users Profile list', 
    props<{ sortBy: string, sortOrder: string; }>()
);

export const profileActions = { 
    initProfile, 
    loadUserProfile, 
    loadUserProfileError, 
    loadUserProfileList,
    loadUserProfileListSucess,
    loadUserProfileSuccess,
    sortUsers
};
