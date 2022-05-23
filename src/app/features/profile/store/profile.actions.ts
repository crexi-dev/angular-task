import { createAction, props } from '@ngrx/store';
import { UserProfile, UserProfileMap } from '@interfaces';

const initProfile = createAction('[Profile Detail] Init');

const initProfileSuccess = createAction(
  '[Profile Detail] Init Success',
  props<{
    user: UserProfile,
  }>(),
);

const initProfileError = createAction(
  '[Profile Detail] Init Error',
  props<{error: Error}>(),
);

const initProfileList = createAction('[Profile List] Init');

const initProfileListSuccess = createAction(
  'Profile List] Init Success',
  props<{
    usersMap: UserProfileMap,
  }>(),
);

const initProfileListError = createAction(
  '[Profile List] Init Error',
  props<{error: Error}>(),
);

const profileListUserSelected = createAction(
  '[Profile List] Profile Selected',
  props<{
    user: UserProfile,
  }>(),
);

export const profileActions = { 
  initProfile,
  initProfileSuccess,
  initProfileError,
  initProfileList,
  initProfileListSuccess,
  initProfileListError,
  profileListUserSelected
};
