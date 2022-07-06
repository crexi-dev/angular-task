import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction(`[Profile] Init Profile`);

const initProfileSuccess = createAction(
    '[Profile] Init Profile Success',
    props<{ profile: UserProfile}>()
);

const initProfileFailure = createAction('[Profile] Init Profile Failure');

export const profileActions = {
    initProfile,
    initProfileFailure,
    initProfileSuccess
};
