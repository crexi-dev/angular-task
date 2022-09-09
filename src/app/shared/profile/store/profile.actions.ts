import { UserProfile } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

export const generateRandomProfiles = createAction('[Profile] Generate Random Users');
export const generateRandomSuccess = createAction('[Profile] Fetch Users Success', props<{ users: UserProfile[] }>());
export const generateRandomFailure = createAction('[Profile] Fetch Users Failure');
//TODO: We should do something when errors happen
//const setUserAsSelected = createAction('[Profile] Changed Selected User), props<{ id: string }>());

export const profileActions = { initProfile, generateRandomProfiles, generateRandomSuccess, generateRandomFailure };
