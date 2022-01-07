import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions, profileListActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.loadSuccess, (state, { user }) => {

        return ({ ...state, user });

    }),
    on(profileActions.select, (state, action) => {

        return {
            ...state,
            user: state.users[action.id]
        };

    }),
    on(profileListActions.loadSuccess, (state, { users }) => {
        return ({ ...state, users });

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer(state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
