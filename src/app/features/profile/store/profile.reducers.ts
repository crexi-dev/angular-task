import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.listSuccessProfile, (state, payload) => ({ ...state, users: payload.results })),
    on(profileActions.successProfile, (state, payload) => ({ ...state, user: payload }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
