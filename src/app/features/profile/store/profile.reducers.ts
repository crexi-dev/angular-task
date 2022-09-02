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
    profileList: [],
    user: dummyProfile
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => ({ ...state })),
    on(profileActions.fetchProfile, (state) => ({ ...state })),
    on(profileActions.fetchProfileSuccess, (state, result) => ({ ...state, user: result })),
    on(profileActions.fetchProfileList, (state) => ({ ...state })),
    on(profileActions.fetchProfileSuccessList, (state, result) => ({ ...state, profileList: result })),
    on(profileActions.loadedProfile, (state, result) => ({ ...state, user: result.user }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
