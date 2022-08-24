import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    profileDetailState: {
        status: 'loading'
    },
    profileListState: {
        profileList: [],
        status: 'loading'
    }
};

const reducer = createReducer(
    initialState,
    on(profileActions.getProfile, (state, { userId }) => {

        const currentUser = state.profileListState.profileList.find((profile) => profile.id === userId);

        return {
            ...state,
            profileDetailState: {
                ...state.profileDetailState,
                errorMessage: '',
                status: 'success',
                user: currentUser
            }
        };

    }),
    on(profileActions.loadRandomProfile, (state) => ({
        ...state,
        profileDetailState: {
            ...state.profileDetailState,
            errorMessage: '',
            status: 'loading',
            user: null
        }
    })),
    on(profileActions.loadRandomProfileSuccess, (state, { userProfile }) => ({
        ...state,
        profileDetailState: {
            ...state.profileDetailState,
            errorMessage: '',
            status: 'success',
            user: userProfile
        }
    })),
    on(profileActions.loadRandomProfileError, (state, { errorMessage }) => ({
        ...state,
        profileDetailState: {
            ...state.profileDetailState,
            errorMessage,
            status: 'error'
        }
    })),
    on(profileActions.loadProfileList, (state) => ({
        ...state,
        profileListState: {
            ...state.profileListState,
            errorMessage: '',
            profileList: [], // TODO: Skeleton Screen
            status: 'loading'
        }
    })),
    on(profileActions.loadProfileListSuccess, (state, { profileList }) => ({
        ...state,
        profileListState: {
            ...state.profileListState,
            errorMessage: '',
            profileList,
            status: 'success'
        }
    })),
    on(profileActions.loadProfileListError, (state, { errorMessage }) => ({
        ...state,
        profileListState: {
            ...state.profileListState,
            errorMessage,
            profileList: [],
            status: 'error'
        }
    }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
