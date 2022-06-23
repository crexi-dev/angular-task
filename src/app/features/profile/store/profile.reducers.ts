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
    on(profileActions.initProfile, (state) => ({ ...state, user: dummyProfile })),
    on(profileActions.getUserCustomProfileSuccess, (state, { payload }) => (
        {
            ...state, user: {
                cellNumber: payload[0]?.cell,
                city: payload[0]?.location.city,
                dateOfBirth: payload[0]?.dob.date,
                email: payload[0]?.email,
                firstName: payload[0]?.name.first,
                lastName: payload[0]?.name.last,
                phoneNumber: payload[0]?.phone,
                picture: payload[0]?.picture.large,
                state: payload[0]?.nat
            }
        }
    ))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
