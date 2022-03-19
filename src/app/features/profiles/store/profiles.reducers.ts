import { Action, createReducer, on } from '@ngrx/store';
import { ProfilesState } from '../interfaces/profiles-state';
import { profilesActions } from './profiles.actions';


const initialState: ProfilesState = {};

const reducer = createReducer(
	initialState,
	on(profilesActions.initProfiles, (state) => ({ users: []})),
	on(profilesActions.getProfileListSuccess, (state, { users }) => ({ ...state, users }))
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfilesReducer(state: ProfilesState | undefined, action: Action) {

	return reducer(state, action);

}
