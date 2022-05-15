import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@features/profile/interfaces';

const initProfile = createAction(
  '[Profile] Init',
  props<{ profile: UserProfile }>()
);

const retrieveProfiles = createAction(
  '[Profile] Retrieve',
  props<{ profiles: UserProfile[] }>()
)

export const profileActions = { initProfile, retrieveProfiles };
