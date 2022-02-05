import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    userList: [],
    isLoading: false
};

const reducer = createReducer(
    initialState,    
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
