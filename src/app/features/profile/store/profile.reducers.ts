import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};
const profileListState: ProfileState = {};

export interface State {
    user: [];
}

const reducer = createReducer(
    initialState,
    on(profileActions.getUserDataSuccessResult, (state, result) => result)
);

const topUserReducer = createReducer(
    profileListState,
    on(profileActions.getTopUserDataSuccessResult, (state, result) => result)
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}

export function getTopUserReducer (state: ProfileState | undefined, action: Action) {

    return topUserReducer(state, action);

}
