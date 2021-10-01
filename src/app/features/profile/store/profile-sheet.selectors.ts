import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsersSheet } from '@interfaces';

export namespace UsersSelectors {
    export const userSheet = createFeatureSelector<IUsersSheet>('users');
    export const selectUserList = createSelector(userSheet, (state) => state.users);
}
