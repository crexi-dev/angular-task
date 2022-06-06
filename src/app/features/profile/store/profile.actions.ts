import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

// Load profiles
const loadProfiles = createAction('[Profile] Load Profiles');
const loadProfilesSuccess = createAction(
    '[Profile] Load Profiles Success',
    props<any>()
);

// Select User Profile
const selectUserProfile = createAction('[Profile] Select User Profile', props<UserProfile>());

export const profileActions = {
    initProfile,
    loadProfiles,
    loadProfilesSuccess,
    selectUserProfile
};
