import { ProfileStateDetails, UserProfile } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const dummyProfile: UserProfile = {
    gender: 'male',
    name: {
        title: 'mr',
        first: 'First Name',
        last: 'Last Name'
    },
    location: {
        street: '9278 new road',
        city: 'Los Angeles',
        state: 'ca',
        postcode: '93027',
        coordinates: {
            latitude: '20.9267',
            longitude: '-7.9310'
        },
        timezone: {
            offset: '-3:30',
            description: 'Newfoundland'
        }
    },
    email: 'test@crexi.com',
    login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480'
    },
    dob: {
        date: '1966-01-01T09:44:18.674Z',
        age: 26
    },
    registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17
    },
    phone: '999-999-9999',
    cell: '888-888-8888',
    id: {
        name: 'PPS',
        value: '0390511T'
    },
    picture: {
        large: '/content/img/default_user.png',
        medium: '/content/img/default_user.png',
        thumbnail: '/content/img/default_user.png'
    },
    nat: 'IE'
};

export const initialState: ProfileStateDetails = {
    error: undefined,
    loading: false,
    selectedUser: dummyProfile,
    users: undefined
};

const featureReducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(profileActions.loadUsers, (state) => ({ ...state, loading: true })),
    on(profileActions.loadUsersFailure, (state, { error }) => ({
        ...state,

        error,

        loading: false
    })),
    on(profileActions.loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: users.results,
        loading: false
    })),

    on(profileActions.selectUserProfile, (state, { selectedUser }) => ({
        ...state,
        selectedUser
    }))
);

// tslint:disable-next-line: only-arrow-functions
export function reducer (state: ProfileStateDetails | undefined, action: Action) {

    return featureReducer(state, action);

}
