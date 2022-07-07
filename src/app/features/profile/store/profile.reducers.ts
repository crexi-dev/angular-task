import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,

    on(profileActions.initProfileSuccess, (state, { profile }) => ({ ...state, user: profile })),

    on(profileActions.initProfilesSuccess, (state, { profiles }) => ({ ...state, profiles }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
