import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profilesActions } from '@features/profiles/store/profiles.actions';

const initialState = [{}];

const reducer = createReducer(
    initialState,
    on(profilesActions.getProfiles, (state) => ({ ...state }))
);

export function getProfilesReducer (state: ProfileState[] | undefined, action: Action) {

    return reducer(state, action);

}
