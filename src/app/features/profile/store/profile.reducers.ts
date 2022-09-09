// Interfaces
import { ProfileState, UserProfile } from '@interfaces';

// NGRX
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

// Initial profile store state
const initialState: ProfileState = {};

// Build reducers for each action
const reducer = createReducer(
    initialState,
    on(
        profileActions.PROFILE_API_GET_ONE_PROFILE_SUCCESS,
        (state: ProfileState, user: UserProfile) => ({ ...state, user })
    ),
    on(
        profileActions.PROFILE_API_GET_LIST_OF_PROFILES_SUCCESS,
        (state: ProfileState, params: {results: UserProfile[] }) =>  ({ ...state, userProfileList: params.results })
    ),
    on(
        profileActions.PROFILE_PAGE_GET_ONE_PROFILE_BY_ARRAY_INDEX,
        (state: ProfileState, param: { id: number }) => ({ ...state, user: state.userProfileList[param.id] })
    )
);

// Build profile feature reducer
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
