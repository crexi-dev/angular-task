import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as profileActions from '@store/actions';

// import { UserProfile } from '../interfaces';

// no longer needed

// const dummyProfile: UserProfile = {
//     cellNumber: '888-888-8888',
//     city: 'Los Angeles',
//     dateOfBirth: 'Jan 1st, 1966',
//     email: 'test@crexi.com',
//     firstName: 'First Name',
//     lastName: 'Last Name',
//     phoneNumber: '999-999-9999',
//     picture: '/content/img/default_user.png',
//     state: 'CA'
// };

// I am making some assumptions on how to handle the "random" profile vs. the 10 list of profiles, 
// since the directions do not specify.
// I am going to load one random profile, when needed, and store it separately from the list of 10 others.
// I was not sure whether to do this, or load a different random profile every time the profile route was
// hit without an id paramter, and whether I should keep filling up the store with random profiles.
// In a real world scenario, I would be asking for clarification of requirements instead of making such assumptions.

const initialState: ProfileState = {
    allProfiles: {
        error: '',
        isLoaded: false,
        profiles: null
    },
    randomProfile: {
        error: '',
        isLoaded: false,
        profile: null
    }
};

const reducer = createReducer<ProfileState>(
    initialState,
    on(profileActions.loadRandomProfileSuccess, (state, action): ProfileState => ({ 
        ...state,
        randomProfile: {
            error: '',
            isLoaded: true,
            profile: action.profile
        }
    })),
    on(profileActions.loadRandomProfileFailure, (state, action): ProfileState => ({ 
        ...state,
        randomProfile: {
            error: action.error,
            isLoaded: false,
            profile: null
        }
    })),
    on(profileActions.loadProfilesSuccess, (state, action): ProfileState => ({
        ...state,
        allProfiles: {
            error: '',
            isLoaded: true,
            profiles: action.profiles
        }
    })),
    on(profileActions.loadProfilesFailure, (state, action): ProfileState => ({
        ...state,
        allProfiles: {
            error: action.error,
            isLoaded: false,
            profiles: null
        }
    }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
