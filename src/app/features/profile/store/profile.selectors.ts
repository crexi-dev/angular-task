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
export const sortBy = createSelector(getProfileState, (state) => state.sortBy);
export const sortOrder = createSelector(getProfileState, (state) => state.sortOrder);

export const getAllUserProfile = createSelector(
    getProfileState,
    selectAll
);

export const getUserProfileList = createSelector(
    getAllUserProfile,
    pageSize,
    currentPage,
    sortBy,
    sortOrder,
    (allEntity, pageSize, currentPage, sortBy, sortOrder) => { 
        
        const currentIndex = currentPage * pageSize;
        if(sortBy && sortOrder === 'asc') {

            allEntity.sort((userA: any, userB: any) => userA[`${sortBy}`].toLowerCase() > userB[`${sortBy}`].toLowerCase() ? 1 : -1);
        
        }
        return allEntity?.slice(currentIndex, currentIndex + pageSize);;

    }
);
