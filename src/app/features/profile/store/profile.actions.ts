import { UserProfile } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const loadProfile = createAction('[Profile] Load Profile', props<{user: UserProfile}>());
const initProfiles = createAction('[Profile] Load Random Profiles', props<{users: UserProfile[]}>());
const loadProfileById = createAction('[Profile] Load Profile By Id', props<{id: string}>());

export const profileActions = { loadProfile, initProfiles, loadProfileById };
