import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    error: null,
    isLoading: false
};

const reducer = createReducer(
    initialState,

    on(profileActions.loadUserProfile, (state) => ({ ...state, isLoading: true })),

    on(profileActions.loadUserProfileSuccess, (state, { userProfile }) => (
        { ...state, isLoading: false, user: userProfile })),

    on(profileActions.loadUserProfileError, (state, { error }) => ({ ...state, error }))

);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
