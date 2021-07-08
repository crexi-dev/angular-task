import { createAction, props } from '@ngrx/store';
import {UserProfile} from '../interfaces'

const initProfile = createAction('[Profile] Init');
const initProfileSuccess = createAction('[Profile] Init success', props<{profiles: UserProfile[]}>());

export const profileActions = { initProfile, initProfileSuccess };

