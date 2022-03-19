import { UserProfile } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const initProfiles = createAction('[Profiles] Init');

// GET PROFILE LIST
const getProfileList = createAction('[Profiles] Get List Of Profiles');
const getProfileListSuccess = createAction('[Profiles] Get List Of Profiles Success', props<{users: UserProfile[] }>());
const getProfileListError = createAction('[Profiles] Get List Of Profiles Error');

/**
 * Profiles Actions
 */
export const profilesActions = {
	initProfiles,
	getProfileList,
	getProfileListSuccess,
	getProfileListError,
};
