import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const getRandomProfile = createAction('[Profile] Get Random Profile');
const getRandomProfileSuccess = createAction('[Profile] Get Random Profile Success', props<{ user: UserProfile}>());
const getRandomProfileError = createAction('[Profile] Get Random Profile Error');

export const profileActions = {
	initProfile,
	getRandomProfile,
	getRandomProfileSuccess,
	getRandomProfileError,
};
