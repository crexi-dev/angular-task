import { ProfilesState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileaState = createFeatureSelector<ProfilesState>('profiles');

export const getProfiles = createSelector(getProfileaState, ({ users }) => {

    return users;

});
