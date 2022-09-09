// NGRX
import { createAction, props } from '@ngrx/store';


// Dispatch to get one profile from the store
const PROFILE_PAGE_GET_ONE_PROFILE_BY_ARRAY_INDEX = createAction(
    '[Profle Page] GET ONE PROFILE BY ID',
    props<{ id: number; }>()
);

// Dispatch to get list of profiles
const PROFILE_API_GET_LIST_OF_PROFILES = createAction('[Profle API] GET LIST OF PROFILES');

// Dispatch if getting a list of profiles fails
const PROFILE_API_GET_LIST_OF_PROFILES_FAILURE = createAction(
    '[Profle API] GET LIST OF PROFILES - FAILURE',
    props<any>()
);

// Dispatch if getting a list of profiles succeeds
const PROFILE_API_GET_LIST_OF_PROFILES_SUCCESS = createAction(
    '[Profle API] GET LIST OF PROFILES - SUCCESS',
    props<any>()
);

// Dispatch to get one profile from the backend
const PROFILE_API_GET_ONE_PROFILE = createAction('[Profle API] GET ONE PROFILE');

// Dispatch if getting a profile from the backend fails
const PROFILE_API_GET_ONE_PROFILE_FAILURE = createAction(
    '[Profle API] GET ONE PROFILE - FAILURE',
    props<any>()
);

// Dispatch if getting a profile from the backend succeeds
const PROFILE_API_GET_ONE_PROFILE_SUCCESS = createAction(
    '[Profle API] GET ONE PROFILE - SUCCESS',
    props<any>()
);

// Export profile actions
export const profileActions = { 
    PROFILE_API_GET_LIST_OF_PROFILES,
    PROFILE_API_GET_LIST_OF_PROFILES_FAILURE,
    PROFILE_API_GET_LIST_OF_PROFILES_SUCCESS, 
    PROFILE_API_GET_ONE_PROFILE,
    PROFILE_API_GET_ONE_PROFILE_FAILURE,
    PROFILE_API_GET_ONE_PROFILE_SUCCESS,
    PROFILE_PAGE_GET_ONE_PROFILE_BY_ARRAY_INDEX
};
