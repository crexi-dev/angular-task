import { createAction, props } from '@ngrx/store';

const getUserCustomProfileSuccess = createAction('Get Custom User Profile Success', props<{ payload: any }>());
const initProfile = createAction('[Profile] Init');

export const profileActions = { getUserCustomProfileSuccess, initProfile };
