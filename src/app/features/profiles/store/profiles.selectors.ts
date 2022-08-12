import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector('profiles');
export const getProfilesState = createSelector(getProfileState, ({ ...users }) => users);
