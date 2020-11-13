import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ selectedProfile }) => {

    return selectedProfile;

});

export const getUserProfiles = createSelector(getProfileState, ({ profiles }) => {

    return profiles;

});