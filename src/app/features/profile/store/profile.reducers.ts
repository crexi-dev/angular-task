import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state, {profile}) => {
        return { ...state, user: profile };
    }),
    on(profileActions.retrieveProfiles, (state, {profiles}) => {
        return { ...state, users: profiles };
    }),
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
