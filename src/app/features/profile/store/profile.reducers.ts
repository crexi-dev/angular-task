import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    allUsers: [],
    error: false,
    isLoading: false,
    user: undefined
};

const reducer = createReducer(
    initialState,
    on(profileActions.loadProfileList, (state: ProfileState) => ({ ...state, error: false, isLoading: true })),
    on(profileActions.loadProfileListSuccess, (state: ProfileState, { users }) => ({
        ...state,
        allUsers: users,
        isLoading: false
    })),
    on(profileActions.loadProfileListError, (state: ProfileState) => ({ ...state, error: true, isLoading: false })),
    on(profileActions.getProfileById, (state: ProfileState, { id }) => ({ ...state, user: state.allUsers[id] }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
