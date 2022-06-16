import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './profile.reducers';

const {
    selectAll
} = adapter.getSelectors();

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);

export const getUserProfileList = createSelector(
    getProfileState,
    selectAll
);
