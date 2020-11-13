import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init', props<{loading: boolean}>());
const initProfileSuccess = createAction('[Profile] Init Success', props<{loading: boolean, profile: UserProfile}>());
const initProfileFail = createAction('[Profile] Init Fail', props<{loading: boolean, error: string}>());
const selectProfile = createAction('[Profile] Select', props<{loading: boolean, profile: UserProfile}>());
const initProfilesList = createAction('[Profile] Get All', props<{loading: boolean}>());
const initProfilesListSuccess = createAction('[Profile] Get All Success', props<{loading: boolean, profiles: UserProfile[]}>());
const initProfilesListFail = createAction('[Profile] Get All Fail', props<{loading: boolean, error: string}>());

export const profileActions = {
    initProfile,
    initProfileSuccess,
    initProfileFail,
    selectProfile,
    initProfilesList,
    initProfilesListSuccess,
    initProfilesListFail
};
