// Interfaces
import { ProfileState } from '@interfaces';

// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Feature selector to get profile slice of state from the store
export const GET_PROFILE_STATE = createFeatureSelector<ProfileState>('profile');

// Selector to get one profile from the store
export const GET_ONE_PROFILE = createSelector(GET_PROFILE_STATE, ({ user }) => user);

// Selector to get a list of all profiles from the store
export const GET_PROFILE_LIST = createSelector(GET_PROFILE_STATE, ({ userProfileList }) => userProfileList);
