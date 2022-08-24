import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(
    getProfileState,
    ({ profileDetailState }) => profileDetailState.user
);
export const isProfileDetailLoading = createSelector(
    getProfileState,
    ({ profileDetailState }) => profileDetailState.status === 'loading'
);
export const profileDetailError = createSelector(
    getProfileState,
    ({ profileDetailState }) => profileDetailState.errorMessage
);

export const getProfileList = createSelector(
    getProfileState,
    ({ profileListState }) => profileListState.profileList
);
export const isProfileListLoading = createSelector(
    getProfileState,
    ({ profileListState }) => profileListState.status === 'loading'
);
export const profileListError = createSelector(
    getProfileState,
    ({ profileListState }) => profileListState.errorMessage
);
