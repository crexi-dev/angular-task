import { UserProfile } from './../interfaces/user-profile';
import { ProfileState } from '@interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

export const adapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>();
const initialState: ProfileState  = adapter.getInitialState({
    // additional entity state properties
    currentPage: 0,
    error: null,
    isLoading: true
});

const reducer = createReducer(
    initialState,

    on(profileActions.loadUserProfile, (state) => ({ ...state, isLoading: true })),

    on(profileActions.loadUserProfileSuccess, (state, { userProfile }) => (
        { ...state, isLoading: false, user: userProfile })),

    on(profileActions.loadUserProfileError, (state, { error }) => ({ ...state, error, isLoading: false })),

    on(profileActions.sortUsers, (state, { sortBy, sortOrder }) => ({ ...state, sortBy, sortOrder })),

    on(profileActions.loadUserProfileListSucess, (state, { userProfiles, page, pageSize }) => 
        adapter.addMany(userProfiles, { ...state, currentPage: page, isLoading: false, pageSize })),

    on(profileActions.resetUsersList, (state) => adapter.removeAll({ ...state, error: null, isLoading: true })),

    on(profileActions.resetUserProfile, (state) => ({ ...state, error: null, isLoading: true, user: null }))    

);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
