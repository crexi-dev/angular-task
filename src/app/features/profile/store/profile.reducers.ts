import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state, {user} ) => {

        return { ...state, user: user };

    })
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
