import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

/*
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
*/

const initialState: ProfileState = {
    selectedUser: null,
    users: [] 
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfilesSuccess, (state, { profiles }) => {
        return { ...state, users: profiles, selectedUser: 0 };
    }),
    on(profileActions.selectProfile, (state, { index }) => {
        return { ...state, selectedUser: index };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
