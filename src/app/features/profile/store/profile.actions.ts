import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const PROFILE_FEATURE = '[Profile] ';

const getProfileList = createAction(
    PROFILE_FEATURE + 'Get Profile List',
    props<{ count?: number}>()
);

const getProfileListSuccess = createAction(
    PROFILE_FEATURE + 'Get Profile List Success',
    props<{ profileList: UserProfile[] }>()
);

const getProfileListError = createAction(
    PROFILE_FEATURE + 'Get Profile List Error',
    props<{ error: string }>()
);

const setSelectedProfileById = createAction(
    PROFILE_FEATURE + 'Set Profile By Id',
    props<{ id : string }>()
);

const getRandomProfile = createAction(
    PROFILE_FEATURE + 'Get Random Profile'   
);

const getRandomProfileSuccess = createAction(
    PROFILE_FEATURE + 'Get Profile List Success',
    props<{ profile: UserProfile }>()
);

export const profileActions = {     
    getProfileList, 
    getProfileListSuccess, 
    getProfileListError, 
    getRandomProfile, 
    getRandomProfileSuccess, 
    setSelectedProfileById 
};

