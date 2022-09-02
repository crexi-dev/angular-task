import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

const fetchProfile = createAction('[Profile] Fetch');
const fetchProfileSuccess = createAction('[Profile] Fetch Success', props<any>());
const fetchProfileFailure = createAction('[Profile] Fetch Failure', props<{ message: string }>());

const fetchProfileList = createAction('[Profile List] Fetch');
const fetchProfileSuccessList = createAction('[Profile List] Fetch Success', props<any>());
const fetchProfileFailureList = createAction('[Profile List] Fetch Failure', props<{ message: string }>());

const loadedProfile = createAction('[Loaded Profile]', props<{user: any}>())

export const profileActions = { initProfile, fetchProfile, fetchProfileSuccess, fetchProfileFailure, fetchProfileList, fetchProfileSuccessList, fetchProfileFailureList, loadedProfile };
