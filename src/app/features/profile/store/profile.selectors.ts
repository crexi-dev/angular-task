import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);

export const getNamedUserProfile = createSelector(getProfileState, ({ name, users }) => 
    users.find((u) => u.name.first === name));

export const getUsers = createSelector(getProfileState, ({ users }) => users);
