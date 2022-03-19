import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

// GET PROFILE 
const getRandomProfile = createAction('[Profile] Get Random Profile');
const getProfile = createAction('[Profile] Get Profile', props<{ id: string}>());
const getProfileSuccess = createAction('[Profile] Get Random Profile Success', props<{ user: UserProfile}>());
const getProfileError = createAction('[Profile] Get Random Profile Error');

export const profileActions = {
	initProfile,
	getRandomProfile,
	getProfile,
	getProfileSuccess,
	getProfileError,
};
