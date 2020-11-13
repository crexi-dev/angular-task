import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    loading: false,
    selectedProfile: null,
    profiles: []
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {
        return { ...state, loading: true };
    }),
    on(profileActions.initProfileSuccess, (state, { profile }) => {
        return { ...state, selectedProfile: profile, loading: false };
    }),
    on(profileActions.initProfileFail, (state, { error } ) => {
        return { ...state, error, loading: false};
    }),

    on(profileActions.selectProfile, (state, { profile }) => {
        return { ...state, selectedProfile: profile, loading: false };
    }),
    on(profileActions.initProfilesList, (state) => {
        return { ...state, loading: true };
    }),
    on(profileActions.initProfilesListSuccess, (state, { profiles }) => {
        return { ...state, profiles, loading: false };
    }),
    on(profileActions.initProfilesListFail, (state, { error } ) => {
        return { ...state, error, loading: false };
    }),
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
