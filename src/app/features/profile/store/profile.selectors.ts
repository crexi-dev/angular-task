import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getProfiles = createSelector(getProfileState, ({ users }) => users);

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);
