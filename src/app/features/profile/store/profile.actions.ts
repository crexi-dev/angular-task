import { createAction, props } from '@ngrx/store';
//import { UserProfile } from '../interfaces';


 const initProfile = createAction('[Profile] Init Profile ');
 const initProfileSuccess = createAction('[Profile]  Init Profile Success',props<{ profile: any }>());

 const tenProfiles = createAction('[Profile] ten Profiles ');
 const tenProfilesSuccess = createAction('[Profile] ten Profiles Success', props<{ profiles: any[] }>());
 
 

 export const profileActions = { initProfile, initProfileSuccess, tenProfiles, tenProfilesSuccess };

