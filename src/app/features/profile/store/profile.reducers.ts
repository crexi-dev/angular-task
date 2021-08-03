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
    id: '',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(profileActions.loadRandomProfile, (state) => {

        return { ...state, user: state.user };

    }),
    on(profileActions.loadProfileSuccess, (state, { user }) => {

        return { ...state, user };

    }),
    on(profileActions.loadProfileList, (state) => {

        return { ...state, userList: state.userList };

    }),
    on(profileActions.loadProfileListSuccess, (state, { userList }) => {

        return { ...state, userList };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
