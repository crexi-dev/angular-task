import { ProfileState, UserProfile } from '@interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

// create an adapter for ngrx entity for CURD operation 
export const adapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>();

// initialize the state using ngrx entity
const initialState: ProfileState  = adapter.getInitialState({
    currentPage: 0,
    error: null,
    isLoading: true
});

// save our our data into the store
const reducer = createReducer(
    initialState,

    // save loading state for single random users
    on(profileActions.loadUserProfile, (state) => ({ ...state, isLoading: true })),

    // save single random user data
    on(profileActions.loadUserProfileSuccess, (state, { userProfile }) => (
        { ...state, isLoading: false, user: userProfile })),

    // save errors
    on(profileActions.loadUserProfileError, (state, { error }) => ({ ...state, error, isLoading: false })),

    // save sorting configuration
    on(profileActions.sortUsers, (state, { sortBy, sortOrder }) => ({ ...state, sortBy, sortOrder })),

    // save profile list user's data, pagination, and loading state
    on(profileActions.loadUserProfileListSucess, (state, { userProfiles, page, pageSize }) => 
        adapter.addMany(userProfiles, { ...state, currentPage: page, isLoading: false, pageSize })),

    // reset profile list data and other configuration 
    on(profileActions.resetUsersList, (state) => 
        adapter.removeAll({ ...state, error: null, isLoading: true, sortBy: null, sortOrder: null })),

    // reset single user data and other configuration 
    on(profileActions.resetUserProfile, (state) => (
        { ...state, error: null, isLoading: true, sortBy: null, sortOrder: null, user: null }))    

);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
