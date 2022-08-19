import { createAction, props } from '@ngrx/store';
import { Profile, ProfileResults, UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');
const updateProfile = createAction('[Profile] Update', props<Profile>());
const listProfile = createAction('[Profile] List Init');
const listSuccessProfile = createAction('[Profile] List Success', props<ProfileResults>());
const successProfile = createAction('[Profile] Success', props<UserProfile>());

export const profileActions = { initProfile, listProfile, listSuccessProfile, successProfile, updateProfile };
