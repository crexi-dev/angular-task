import { ProfileState, UserProfile } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUser = (state: ProfileState): UserProfile => {

    return state.user;

};

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, selectUser);
