import { createAction } from '@ngrx/store';

const getProfiles = createAction('[Profile] Get Profiles');
export const profilesActions = { getProfiles };
