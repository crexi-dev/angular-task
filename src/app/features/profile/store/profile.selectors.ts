import { ProfileState, UserProfile } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUser = (state: ProfileState): UserProfile => {

    return state.user;

};

export const selectProfileFeature = createFeatureSelector<ProfileState>('profile');

export const selectUserProfile = createSelector(selectProfileFeature, selectUser);
