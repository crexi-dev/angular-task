import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getSelectedUserProfile = createSelector(getProfileState, ({ selectedUser }) => selectedUser);

export const getRandomUsers = createSelector(getProfileState, ({ randomUsers }) => randomUsers);

export const getUserName = createSelector(getSelectedUserProfile, ( user ) => {user.firstName + ' ' + user.lastName})
