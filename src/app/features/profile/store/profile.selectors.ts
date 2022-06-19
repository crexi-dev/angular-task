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
export const getLoading = createSelector(getProfileState, (state) => state.isLoading);

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
        const allUsers = JSON.parse(JSON.stringify(allEntity));
        if(sortBy && sortOrder === 'asc') {

            allUsers.sort((userA: any, userB: any) => userA[`${sortBy}`]?.toLowerCase() > userB[`${sortBy}`]?.toLowerCase() ? 1 : -1);
        
        } else if(sortBy && sortOrder === 'desc') {

            allUsers.sort((userA: any, userB: any) => userB[`${sortBy}`]?.toLowerCase() > userA[`${sortBy}`]?.toLowerCase() ? 1 : -1);
            
        }
        return allUsers?.slice(currentIndex, currentIndex + pageSize);;

    }
);

export const selectUserEntities = createSelector(
    getProfileState,
    (state) => state.entities
);

export const getUsersById = (userId: string) => createSelector(
    selectUserEntities,
    (userEntities) => userId && userEntities && userEntities[userId]
);
