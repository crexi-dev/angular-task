import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const FEATURE_PROFILE_NAME = 'profile';

export const getProfileState = createFeatureSelector<ProfileState>(FEATURE_PROFILE_NAME);

export const getUserProfile = createSelector(getProfileState, ({ user }) => {

    return user;
});


export const getUserProfileById = (id: string) => createSelector(getProfileState, ({ entities }) => {

    return entities[id] || null;
});

export const getProfiles = createSelector(getProfileState, ({ ids, entities }) => {

    return ids.map((index) => entities[index]);
});

export const isLoadingProfile = createSelector(getProfileState, ({ isLoading }) => isLoading);
