import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

// Load profiles
const loadProfiles = createAction('[Profile] Load Profiles');
const loadProfilesSuccess = createAction(
    '[Profile] Load Profiles Success',
    props<any>()
);

export const profileActions = {
    initProfile,
    loadProfiles,
    loadProfilesSuccess
};
