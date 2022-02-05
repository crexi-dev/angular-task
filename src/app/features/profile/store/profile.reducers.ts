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
    userList: [],
    isLoading: false
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(profileActions.getProfileList, (state) => {

        return { 
            ...state, 
            userList: [], 
            isLoading: true
        };

    }),    
    on(profileActions.getProfileListSuccess, (state, action) => {

        return { 
            ...state, 
            userList: action.profileList,
            isLoading: false
        };

    }),
    on(profileActions.setSelectedProfileById, (state, action) => {        
        
        return { 
            ...state, 
            user: state.userList.find((user, index) => index.toString() === action.id), 
            isLoading: true
        };

    }),
    on(profileActions.getRandomProfile, (state) => {

        return { 
            ...state, 
            user: undefined, 
            isLoading: true
        };

    }),    
    on(profileActions.getRandomProfileSuccess, (state, action) => {

        return { 
            ...state, 
            user: action.profile, 
            isLoading: false
        };

    }),
    on(profileActions.getProfileListError, (state, action) => {

        return { 
            ...state,  
            error: action.error,           
            isLoading: false
        };

    })
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
