import {createAction, props} from '@ngrx/store';
import {UserProfile} from "@interfaces";

const TYPE = '[Profile]';

const initProfile = createAction(`${TYPE} Init`, props<{id?: string}>());
const searchProfile = createAction(`${TYPE} Search profile`, props<{
    page?: number,
    limit?: number,
}>());
const searchProfileSuccess = createAction(`${TYPE} Search profile success`, props<{
    entities: UserProfile[],
}>());
const searchProfileFailed = createAction(`${TYPE} Search profile failed`, props<{
    error: Error,
}>());

export const profileActions = {
    initProfile,
    searchProfile,
    searchProfileSuccess,
    searchProfileFailed,
};
