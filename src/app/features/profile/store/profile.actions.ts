import { ILoadUserPayload } from '@interfaces';
import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');

// Action to load the single random user
const loadUserProfile = createAction('[Profile] load User profile');

// Action to load the list of random user
const loadUserProfileList = createAction(
    '[Profile] load User profile List',
    props<{ usersRequest: ILoadUserPayload }>()
);

// Action to save the list of the random user to the state 
const loadUserProfileListSucess = createAction(
    '[Profile] load User profile List Success',
    props<{ userProfiles: UserProfile[], page: number,
        pageSize: number }>()
);

// Action to save the single random user to the state 
const loadUserProfileSuccess = createAction(
    '[Profile] load User profile Success', 
    props<{ userProfile: UserProfile }>()
);

// Action to save the error to the state if any failures
const loadUserProfileError = createAction(
    '[Profile] load User profile Error', 
    props<{ error: string }>()
);

// Action to save the sorting configuration to the state
const sortUsers = createAction(
    '[Profile] Sort Users Profile list', 
    props<{ sortBy: string, sortOrder: string; }>()
);

// action to reset the users list when the page get destoryed 
const resetUsersList = createAction('[Profile] reset users profile list');

// action to reset the single user when the page get destroyed
const resetUserProfile = createAction('[Profile] reset users profile');

// list all the actions to a single variable for easy access across the application 
export const profileActions = { 
    initProfile, 
    loadUserProfile, 
    loadUserProfileError, 
    loadUserProfileList,
    loadUserProfileListSucess,
    loadUserProfileSuccess,
    resetUserProfile,
    resetUsersList,
    sortUsers
};
