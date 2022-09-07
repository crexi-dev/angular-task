import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    users: []
};

const reducer = createReducer(
    initialState,
    on(profileActions.fetchUsersSuccess, (state, payload) => ({ ...state, users: payload.users })),
    on(profileActions.selectUserUuid, (state, payload) => ({ ...state, selectedUuid: payload.uuid }))
);

export function profileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
