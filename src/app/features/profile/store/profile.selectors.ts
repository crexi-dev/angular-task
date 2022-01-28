import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {

    return user;

});

export const getUserProfiles = createSelector(getProfileState, ({ users }) => {
    return users;
});
export const getError = createSelector(getProfileState, ({ error }) => {
    return error;
});