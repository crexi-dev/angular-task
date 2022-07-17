import { createAction } from '@ngrx/store';

const initProfile = createAction('[UserProfile] Init');

export const profileActions = { initProfile };
