import { createAction, props } from '@ngrx/store';
import {UserProfile} from '../interfaces'

 const initProfile = createAction('[Profile] Init');
 const initProfileSuccess = createAction('[Profile] Init success', props<{profiles: UserProfile[]}>());
 const initProfileError = createAction('[Profile] Init Profile Error');

 export const profileActions = { initProfile, initProfileSuccess, initProfileError };

