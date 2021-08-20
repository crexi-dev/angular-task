import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';
// import { ProfileState } from '../interfaces';
// import { UserProfile } from '../interfaces/user-profile';
// import { ProfileState } from '../interfaces/profile-state';

const initProfile = createAction('[Profile] Init');

export const profileActions = { initProfile };

export const LOAD_PROFILE = '[profile page] load profile';
export const LOAD_PROFILE_SUCCESS = '[profile page] load profile success';


export const loadProfile = createAction(LOAD_PROFILE);
export const loadProfileSuccess = createAction(
    LOAD_PROFILE_SUCCESS, 
    props<{user: UserProfile}>()
    
    );
