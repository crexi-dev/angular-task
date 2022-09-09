import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { initProfile, generateRandomSuccess, } from '@store/actions';
import { UserProfile } from '../interfaces';

const dummyProfile: UserProfile = {
    id: '1',
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

const dummyRandomUsers: UserProfile[] = [
    {
        id: '1',
        cellNumber: '888-888-8888',
        city: 'Los Angeles',
        dateOfBirth: 'Jan 1st, 1966',
        email: 'test@crexi.com',
        firstName: 'First Name',
        lastName: 'Last Name',
        phoneNumber: '999-999-9999',
        picture: '/content/img/default_user.png',
        state: 'CA'
    },
    {
        id: '2',
        cellNumber: '288-888-8888',
        city: 'Lost',
        dateOfBirth: 'Jan 1st, 1990',
        email: 'test2@crexi.com',
        firstName: 'First Name2',
        lastName: 'Last Name2',
        phoneNumber: '229-999-9999',
        picture: '/content/img/default_user.png',
        state: 'CA'
    },
];

const initialState: ProfileState = {
    selectedUser: null,
    randomUsers: [],
    selectedID: null,
};

const reducer = createReducer(
    initialState,
    on(initProfile, (state) => ({ ...state, selectedUser: dummyProfile })),
    on(generateRandomSuccess, (state, payload) => ({ ...state, randomUsers: dummyRandomUsers })),
    // on(generateRandomSuccess, (state, payload) => ({ ...state, randomUsers: payload.users })),
    // on(setUserAsSelected), (state,payload) => ({...state, selectedID: payload })),
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {
    return reducer(state, action);
}
