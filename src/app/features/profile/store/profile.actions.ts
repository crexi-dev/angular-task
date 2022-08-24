import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const getProfile = createAction(
    '[Profile] Get Profile',
    props<{ userId?: string }>()
);
const loadRandomProfile = createAction('[Profile] Load Random Profile');
const loadRandomProfileSuccess = createAction(
    '[Profile] Load Random Profile Success',
    props<{ userProfile: UserProfile }>()
);
const loadRandomProfileError = createAction(
    '[Profile] Load Random Profile Error',
    props<{ errorMessage: string }>()
);
const loadProfileList = createAction('[Profile] Load Profile List');
const loadProfileListSuccess = createAction(
    '[Profile] Load Profile List Success',
    props<{ profileList: UserProfile[] }>()
);
const loadProfileListError = createAction(
    '[Profile] Load Profile List Error',
    props<{ errorMessage: string }>()
);

export const profileActions = {
    getProfile,
    loadProfileList,
    loadProfileListError,
    loadProfileListSuccess,
    loadRandomProfile,
    loadRandomProfileError,
    loadRandomProfileSuccess
};
