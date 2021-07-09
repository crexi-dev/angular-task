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

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };
    }),
    on(profileActions.initProfileSuccess, (state, action) => {
        const user: UserProfile = {
            cellNumber: action.profile.cell,
            phoneNumber: action.profile.phone,
            city: action.profile.location.city,
            state: action.profile.location.state,
            dateOfBirth: action.profile.dob.date,
            picture: action.profile.picture.medium,
            email: action.profile.email,
            firstName: action.profile.name.first,
            lastName: action.profile.name.last,
        }

        return { ...state, user };

    }),
    on(profileActions.tenProfiles, (state) => {
        return {...state};
    }),
    on(profileActions.tenProfilesSuccess, (state, action) => {
        const users: UserProfile
        return {...state};
    }),


);


// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
