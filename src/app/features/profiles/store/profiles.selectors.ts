import { ProfilesState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfilesState = createFeatureSelector<ProfilesState>('profiles');

export const getAllProfiles = createSelector(getProfilesState, ({ users }) =>	users);
