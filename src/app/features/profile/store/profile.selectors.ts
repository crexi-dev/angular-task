import { ProfileState, UserProfile } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './profile.reducers';

// selector's in general memorize the data and emit only when the value changes 
// so, it's always advisable to have selector for individual fields and then combine them as we needed 
// it will give use better performance and avoid unnecessary emits 

// adapter that fetches all the user's profile 
const {
    selectAll
} = adapter.getSelectors();

export const getProfileState = createFeatureSelector<ProfileState>('profile');

// selector to get single random user
export const getUserProfile = createSelector(getProfileState, ({ user }) => user);

// selector to get page size
export const pageSize = createSelector(getProfileState, (state) => state.pageSize);

// selector to get current page
export const currentPage = createSelector(getProfileState, (state) => state.currentPage);

// selector to get sort by configuration
export const sortBy = createSelector(getProfileState, (state) => state.sortBy);

// selector to get sort order
export const sortOrder = createSelector(getProfileState, (state) => state.sortOrder);

// selector to get loading state
export const getLoading = createSelector(getProfileState, (state) => state.isLoading);

// selector to get all users profile
export const getAllUserProfile = createSelector(
    getProfileState,
    selectAll
);

// the selector that get user's profile list and does sorting based on the user's selection
export const getUserProfileList = createSelector(
    getAllUserProfile,
    pageSize,
    currentPage,
    sortBy,
    sortOrder,
    (allEntity, pageSize, currentPage, sortBy, sortOrder) => { 
        
        const currentIndex = currentPage * pageSize;
        const allUsers: UserProfile[] = JSON.parse(JSON.stringify(allEntity));
        if(sortBy && sortOrder === 'asc') {

            allUsers.sort((userA, userB) => userA[`${sortBy}`]?.toLowerCase() > userB[`${sortBy}`]?.toLowerCase() ? 1 : -1);
        
        } else if(sortBy && sortOrder === 'desc') {

            allUsers.sort((userA, userB) => userB[`${sortBy}`]?.toLowerCase() > userA[`${sortBy}`]?.toLowerCase() ? 1 : -1);
            
        }
        return allUsers?.slice(currentIndex, currentIndex + pageSize);;

    }
);

// fetch all the entities for profile list 
export const selectUserEntities = createSelector(
    getProfileState,
    (state) => state.entities
);

// fetch selected user data from entities dictionary 
export const getUsersById = (userId: string) => createSelector(
    selectUserEntities,
    (userEntities) => userId && userEntities && userEntities[userId]
);
