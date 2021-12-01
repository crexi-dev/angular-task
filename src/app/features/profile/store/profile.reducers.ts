import { ProfileState, UserProfile } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfiles, (state, {users}) => {
        return {
            ...state,
            users };
    }),
    on(profileActions.loadProfile, (state, {user}) => {
        return {
            ...state,
            user
        };
    }),
    on(profileActions.loadProfileById, (state, {id}) => {
        let user: UserProfile;
        if (state.users) {
            user = state.users.find(user => user.id === id);
        }
        user = user || null;
        return {
            ...state,
            user
        };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
