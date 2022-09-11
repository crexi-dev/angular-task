import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

// create an action that will load 1 random profile for when route parameter id is not 
// passed for a profile, and uses either loadRandomProfileSuccess or loadRandomProfileFailure 
// depending on API result
export const loadRandomProfile = createAction('[Profile] Load Random Profile');

// create an action that will be used when loadRandomProfile action is called and data is 
// returned successfully
export const loadRandomProfileSuccess = createAction(
    '[Profile] Load Random Profile Success',
    props<{profile: UserProfile}>()
);

// create and action that wiull be used when loadRandomProfile action is called and there 
// is an error returning data
export const loadRandomProfileFailure = createAction(
    '[Profile] Load Random Profile Failure',
    props<{error: string}>()
);

// create an action that will load 10 random profiles, and uses either loadProfilesSuccess 
// or loadProfilesFailure depending on API result
export const loadProfiles = createAction('[Profile] Load Profiles');

// create an action that will be used when LoadProfiles action is called and data is 
// returned successfully
export const loadProfilesSuccess = createAction(
    '[Profile] Load Profiles Success',
    props<{profiles: UserProfile[]}>()
);

// create and action that wiull be used when LoadProfiles action is called and there is 
// an error returning data
export const loadProfilesFailure = createAction(
    '[Profile] Load Profiles Failure',
    props<{error: string}>()
);
