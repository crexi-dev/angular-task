import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const profileActions = {
    load: createAction('[Profile] Load Profile'),
    loadFail: createAction('[Profile] Load Profiles Fail'),
    loadSuccess: createAction('[Profile] Load Profiles Succes', props<{user: UserProfile}>())
};
