import { createAction, props } from '@ngrx/store';
import {UserProfile} from '../interfaces'

 const initProfile = createAction('[Profile] Init Profile');
 const initProfileSuccess = createAction('[Profile] Init Profile Success', props<{user: UserProfile}>());
 

 export const profileActions = { initProfile, initProfileSuccess };

