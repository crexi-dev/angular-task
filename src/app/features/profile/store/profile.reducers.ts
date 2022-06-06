import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { UserProfile } from '../interfaces';

const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: new Date('Jan 1st, 1966'),
    email: 'test@crexi.com',
    firstName: 'First Name',
    id: 'dummy',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {
    isLoading: false,
    users: []
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => ({ ...state, user: dummyProfile })),

    // Load Profile
    on(profileActions.loadProfiles, (state) => ({
        ...state,
        isLoading: true
    })),

    // Load Profile SUCCESS
    on(profileActions.loadProfilesSuccess, (state, result) => ({
        ...state,
        users: result
    })),

    on(profileActions.selectUserProfile, (state, selectedUserProfile) => ({
        ...state,
        user: selectedUserProfile
    }))
);

export function getProfileReducer(state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
