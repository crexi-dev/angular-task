import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const getProfileByIndex = createAction('[Profile] Get', props<{ index: number }>());

// NOTE: I'm not handling erros for this test.
const loadRandomProfile = createAction('[Profile] Load Random');
const loadRandomProfileSuccess = createAction('[Profile] Load Random Success', props<{ user: UserProfile }>());

const loadRandomProfiles = createAction('[Profiles] Load Random');
const loadRandomProfilesSuccess = createAction('[Profiles] Load Random Success', props<{ users: UserProfile[] }>());

export const profileActions = {
    initProfile,
    // tslint:disable-next-line: object-literal-sort-keys
    getProfileByIndex,
    loadRandomProfile,
    loadRandomProfileSuccess,
    loadRandomProfiles,
    loadRandomProfilesSuccess
};
