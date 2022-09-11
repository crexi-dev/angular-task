import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { UserProfile } from '../interfaces';

const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {
    allUsers: [],
    error: false,
    isLoading: false,
    user: undefined
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => ({ ...state, user: dummyProfile })),
    on(profileActions.loadProfileList, (state: ProfileState) => ({ ...state, error: false, isLoading: true })),
    on(profileActions.loadProfileListSuccess, (state: ProfileState, { users }) => ({
        ...state,
        allUsers: users,
        isLoading: false
    })),
    on(profileActions.loadProfileListError, (state: ProfileState) => ({ ...state, error: true, isLoading: false })),
    on(profileActions.getProfileById, (state: ProfileState, { id }) => ({ ...state, user: state.allUsers[id] }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
