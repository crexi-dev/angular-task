import { createAction } from '@ngrx/store';
//import {UserProfile} from '../interfaces'

 const initProfile = createAction('[Profile] Init Profile ');
 const initProfileSuccess = createAction('[Profile]  Init Profile Success',);
 

 export const profileActions = { initProfile, initProfileSuccess };

