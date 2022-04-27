import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init', props<{ user: UserProfile }>() );
const initProfileList = createAction('[Profile List] Init ', props<{ users: UserProfile[] }>() );

export const profileActions = { initProfile, initProfileList };
