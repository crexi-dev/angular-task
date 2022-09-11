import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

export const GET_USER = ' [Profile] Get User';
export const GET_USER_TOP = ' [Profile] Get User top';
export const GET_USER_SUCCESS = ' [Profile] Get User Success';
export const GET_TOP_USER_SUCCESS = ' [Profile] Get Top User Success';

export const getUserData = createAction(GET_USER);

// export const getTopUserData = createAction(GET_USER_TOP);

export const getUserDataSuccessResult = createAction(GET_USER_SUCCESS, props<any>());

// export const getTopUserDataSuccessResult = createAction(GET_TOP_USER_SUCCESS, props<any>());

export const profileActions 
= { getUserData, getUserDataSuccessResult, initProfile };
