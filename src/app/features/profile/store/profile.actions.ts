import { createAction, props } from '@ngrx/store';
import { IUserProfile } from '../interfaces';

const loadProfiles = createAction('[Profile] Load');
const loadProfilesFail = createAction('[Profile] Load Fail');
const loadProfilesSuccess = createAction('[Profile] Load Success', props<{data: IUserProfile[]}>());

export const profileActions = { loadProfiles, loadProfilesSuccess, loadProfilesFail };
