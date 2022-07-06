import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,

    on(profileActions.initProfile, (state) => ({ ...state })),

    on(profileActions.initProfileSuccess, (state, { profile }) => ({ ...state, user: profile }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
