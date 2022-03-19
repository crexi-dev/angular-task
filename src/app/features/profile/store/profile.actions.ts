import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

// GET PROFILE 
const getRandomProfile = createAction('[Profile] Get Profile At Random');
const getProfile = createAction('[Profile] Get Profile By Id', props<{ id: string}>());
const getProfileSuccess = createAction('[Profile] Get Profile Success', props<{ user: UserProfile}>());
const getProfileError = createAction('[Profile] Get Profile Error');

export const profileActions = {
	initProfile,
	getRandomProfile,
	getProfile,
	getProfileSuccess,
	getProfileError,
};
