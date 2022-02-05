import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const getProfileList = createAction(
    '[Profile] Get Profile List',
    props<{ count?: number}>()
);

const getProfileListSuccess = createAction(
    '[Profile] Get Profile List Success',
    props<{ profileList: UserProfile[] }>()
);

const getProfileListError = createAction(
    '[Profile] Get Profile List Error',
    props<{ error: string }>()
);

const setSelectedProfileById = createAction(
    '[Profile] Set Profile By Id',
    props<{ id : string }>()
);

const getRandomProfile = createAction(
    '[Profile] Get Random Profile'   
);

const getRandomProfileSuccess = createAction(
    '[Profile] Get Profile List Success',
    props<{ profile: UserProfile }>()
);

export const profileActions = { 
    initProfile,
    getProfileList, 
    getProfileListSuccess, 
    getProfileListError, 
    getRandomProfile, 
    getRandomProfileSuccess, 
    setSelectedProfileById 
};

