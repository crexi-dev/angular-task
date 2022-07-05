import { IUserProfileListState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: IUserProfileListState = {
    data: [],
    loading: false,
    loaded: false
};

const reducer = createReducer(
    initialState,
    on(profileActions.loadProfiles, (state) => ({ ...state, loading: true })),
    on(profileActions.loadProfilesSuccess, (state, payload) =>
        ({ ...state, ...payload, loading: false, loaded: true })),
    on(profileActions.loadProfilesFail, (state) => ({ ...state, loading: false, loaded: false }))
);

export function getProfileReducer (state: IUserProfileListState | undefined, action: Action) {

    return reducer(state, action);

}
