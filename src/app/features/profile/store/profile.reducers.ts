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
    users: []
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        console.log("i am called: ");
        return { ...state, user: dummyProfile };

    }),
    on(profileActions.getProfileByIndex, (state, { index }) => {

        return { ...state, user: state.users[index] };

    }),
    on(profileActions.loadRandomProfileSuccess, (state, { user }) => {

        return { ...state, user };

    }),
    on(profileActions.loadRandomProfilesSuccess, (state, { users }) => {

        return { ...state, users };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
