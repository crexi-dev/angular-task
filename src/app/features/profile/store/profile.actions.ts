import { createAction, props } from '@ngrx/store';
import { ProfileRecords } from '@interfaces';

const initProfile = createAction('[Profile] Init');
const setProfiles = createAction('[Profile] Set Multiple', props<{ users: ProfileRecords }>());

export const profileActions = { initProfile, setProfiles };
