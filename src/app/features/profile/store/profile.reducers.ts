import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
  usersMap: new Map(),
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfileSuccess, profileActions.profileListUserSelected, (state, { user }) => {
        return { ...state, user, };
    }),
    on(profileActions.initProfileListSuccess, (state, { usersMap }) => {
      return {...state, usersMap}
    })
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
