import { createSelector } from '@ngrx/store';
import { ProfileState, selectProfile } from '../interfaces/profile-state';

const error = (state: ProfileState): any => {

    return state.state.error;

};

const loading = (state: ProfileState): boolean => {

    return state.state.loading;

};

const selectedUser = (state: ProfileState): any => {

    return state.state.selectedUser;

};

const users = (state: ProfileState): any => {

    return state.state.users;

};

export const getError = createSelector(selectProfile, error);
export const getLoading = createSelector(selectProfile, loading);
export const getSelectedUser = createSelector(selectProfile, selectedUser);
export const getUsers = createSelector(selectProfile, users);
