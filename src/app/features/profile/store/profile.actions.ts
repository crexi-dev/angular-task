import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction(`[Profile] Init Profile`);

const initProfileSuccess = createAction(
    '[Profile] Init Profile Success',
    props<{ profile: UserProfile}>()
);

const initProfileFailure = createAction('[Profile] Init Profile Failure');

const initProfiles = createAction(
    `[Profile] Init Profiles`,
    props<{ count: number}>()
);

const initProfilesSuccess = createAction(
    '[Profile] Init Profiles Success',
    props<{ profiles: UserProfile[]}>()
);

const initProfilesFailure = createAction('[Profile] Init Profiles Failure');

const selectUser = createAction(
    `[Profile] Select User`,
    props<{ id: string}>()
);

export const profileActions = {
    initProfile,
    initProfileFailure,
    initProfiles,
    initProfilesFailure,
    initProfilesSuccess,
    initProfileSuccess,
    selectUser
};
