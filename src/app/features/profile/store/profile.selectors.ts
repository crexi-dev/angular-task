import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './profile.reducers';

const {
    selectAll
} = adapter.getSelectors();

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);
export const pageSize = createSelector(getProfileState, (state) => state.pageSize);
export const currentPage = createSelector(getProfileState, (state) => state.currentPage);

export const getAllUserProfile = createSelector(
    getProfileState,
    selectAll
);

export const getUserProfileList = createSelector(
    getAllUserProfile,
    pageSize,
    currentPage,
    (allEntity, pageSize, currentPage) => { 
        
        const currentIndex = currentPage * pageSize;
        return allEntity?.slice(currentIndex, currentIndex + pageSize);

    }
);
