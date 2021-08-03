import { ProfileState, UserProfile } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUser = (state: ProfileState): UserProfile => {

    return state.user;

};

const selectAllUsers = (state: ProfileState): UserProfile[] => {

    return state.userList;

};

export const selectProfileFeature = createFeatureSelector<ProfileState>('profile');

export const selectUserList = createSelector(selectProfileFeature, selectAllUsers);
export const selectUserProfile = createSelector(selectProfileFeature, selectUser);
