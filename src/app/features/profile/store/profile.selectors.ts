import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getUserProfile = createSelector(getProfileState, ({ user }) => user);
export const getProfiles = createSelector(getProfileState, ({ allUsers }) => allUsers);
export const isLoading = createSelector(getProfileState, ({ isLoading }) => isLoading);
export const error = createSelector(getProfileState, ({ error }) => error);
