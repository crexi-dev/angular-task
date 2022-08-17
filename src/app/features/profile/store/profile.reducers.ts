import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as profileActions from '@store/actions';

const profileInitialState: ProfileState = {};

const userReducer = createReducer(
    
    profileInitialState,

    on(profileActions.fetchAllSuccess, (state, { users }) => ({ ...state, users })),

    on(profileActions.fetchAllFailure, (state, { message }) => ({ ...state, message })),

    on(profileActions.fetchSuccess, (state, { user }) => ({ ...state, user })),
    
    on(profileActions.fetchFailure, (state, { message }) => ({ ...state, message })),
    
    on(profileActions.findByIdSuccess, (state, { user }) => ({ ...state, user })),
    
    on(profileActions.findByIdFailure, (state, { message }) => ({ ...state, message }))

);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return userReducer(state, action);

}
