import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const loadProfiles = createAction(
  '[Profile List] Load Profiles'
);

const loadProfilesSuccess = createAction(
  '[Profile List] Load Profiles Success', 
  props<{ profiles: UserProfile[] }>()
);

const loadProfilesFailure = createAction(
  '[Profile List] Load Profiles Failure', 
  props<{ error: string }>()
);

const loadProfile = createAction(
  '[Profile Detail] Load Profile', 
  props<{ profile: UserProfile }>()
);

const getProfile = createAction(
  '[Profile Detail] Get Profile', 
  props<{ id: string }>()
);

export const profileActions = { 
  initProfile,
  getProfile,
  loadProfiles,
  loadProfilesSuccess,
  loadProfilesFailure,
  loadProfile
};