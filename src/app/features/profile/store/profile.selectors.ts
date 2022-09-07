import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { generateRandomNumber } from '@core/utils/math.utils';

export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getUsers = createSelector(getProfileState, ({ users }) => users);
export const getRandomUser = createSelector(getProfileState, ({ users }) =>
    users[generateRandomNumber(0, users.length - 1)]);
export const getSelectedUuid = createSelector(getProfileState, ({ selectedUuid }) => selectedUuid);
export const getSelectedUser = createSelector(
    getUsers,
    getSelectedUuid,
    (users, uuid) => users.find((user) => user.uuid === uuid)
);
