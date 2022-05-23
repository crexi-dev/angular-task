import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');

const initProfileSuccess = createAction(
  '[Profile] Init Success',
  props<{
    user: UserProfile,
  }>(),
);

const initProfileError = createAction('[Profile] Init Success');

export const profileActions = { 
  initProfile,
  initProfileSuccess,
  initProfileError
};
