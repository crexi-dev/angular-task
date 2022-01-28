import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { UserProfile } from '../interfaces';

const dummyProfile: UserProfile = {
    id: 'dummy', // to differentiate between a record from store vs a dummy one
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    avatar: '/content/img/default_user.png', // needs one for list and one for detail page
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = { 
    user: null,
    users: null
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(profileActions.loadProfile, (state, action) => {
        const user: UserProfile = action.profile;
        return { ...state, user: user };
    }),
    on(profileActions.loadProfilesSuccess, (state, action) => {
        const users: UserProfile[] = action.profiles;
        return { ...state, users: users };
    }),    
    on(profileActions.loadProfilesFailure, (state, action) => {
        const error: string = action.error;
        return { ...state, error: error };
    }),
    on(profileActions.getProfile, (state, action) => {
        return { 
            ...state, 
            user:   state.users ? 
                    state.users.find((user: UserProfile) => action.id === user.id) :
                    dummyProfile
        };
    })
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
