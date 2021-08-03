import { createAction, props } from '@ngrx/store';

import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');
const loadProfileSuccess = createAction('[Profile] Load Profile Success', props<{ user: UserProfile }>());
const loadRandomProfile = createAction('[Profile] Load Random Profile');

export const profileActions = {
    initProfile,
    loadProfileSuccess,
    loadRandomProfile
};
