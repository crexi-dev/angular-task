import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

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
    initProfiles,
    initProfilesFailure,
    initProfilesSuccess,
    selectUser
};
