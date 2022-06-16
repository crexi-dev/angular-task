import { UserProfile } from './../interfaces/user-profile';
import { ProfileState } from '@interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

export const adapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>();
const initialState: ProfileState  = adapter.getInitialState({
    // additional entity state properties
    error: null,
    isLoading: false
});

const reducer = createReducer(
    initialState,

    on(profileActions.loadUserProfile, (state) => ({ ...state, isLoading: true })),

    on(profileActions.loadUserProfileSuccess, (state, { userProfile }) => (
        { ...state, isLoading: false, user: userProfile })),

    on(profileActions.loadUserProfileError, (state, { error }) => ({ ...state, error })),

    on(profileActions.loadUserProfileListSucess, (state, { userProfiles }) => adapter.addMany(userProfiles, state))

);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
