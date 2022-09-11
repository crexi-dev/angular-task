import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// profileList

export const getProfileState = createFeatureSelector<ProfileState>('profile');
// export const getProfileListState = createFeatureSelector<ProfileState>('profileList');

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);
// export const getProfileList = createSelector(getProfileListState, ({ user }) => user);
