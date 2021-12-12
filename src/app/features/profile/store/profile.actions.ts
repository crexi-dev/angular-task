import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const profileActions = {
    load: createAction('[Profile] Load Profile'),
    loadFail: createAction('[Profile] Load Profile Fail'),
    loadSuccess: createAction('[Profile] Load Profile Succes', props<{user: UserProfile}>()),
    select: createAction('Profile] Select Profile', props<{ id: number }>())
};

export const profileListActions = {
    load: createAction('[Profile] Load Profiles List', props<{userCount: number}>()),
    loadFail: createAction('[Profile] Load Profiles List Fail'),
    loadSuccess: createAction('[Profile] Load Profiles List Succes', props<{users: UserProfile[]}>())
}