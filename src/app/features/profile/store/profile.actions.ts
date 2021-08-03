import { createAction, props } from '@ngrx/store';

import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');
const loadProfileSuccess = createAction('[Profile] Load Profile Success', props<{ user: UserProfile }>());
const loadRandomProfile = createAction('[Profile] Load Random Profile');
const loadProfileList = createAction('[Profile] Load Profiles');
const loadProfileListSuccess = createAction('[Profile] Load Profiles Success', props<{ userList: UserProfile[] }>());

export const profileActions = {
    initProfile,
    loadProfileList,
    loadProfileListSuccess,
    loadProfileSuccess,
    loadRandomProfile
};
