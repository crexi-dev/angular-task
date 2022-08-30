import { UserProfile } from '@interfaces';
import { createAction ,props} from '@ngrx/store';


// getRandomProfile Endpoint
export const loadingGetRandomProfile = createAction('[Profile] Loading Get Random Profile')
export const getRandomProfileSuccess = createAction(
  '[Profile] Get Profile Success',
  props<{ result: UserProfile }>()
)
export const getRandomProfileFail = createAction(
  '[Profile] Get Profile Fail',
  props<{ error: string }>()
)


// listRandomProfile Endpoint
export const loadingListRandomProfile = createAction('[Profile] Loading List Random Profile')
export const listRandomProfileSuccess = createAction(
  '[Profile] List Profile Success',
  props<{ result: UserProfile[] }>()
)
export const listRandomProfileFail = createAction(
  '[Profile] List Profile Fail',
  props<{ error: string }>()
)

// pickRandomProfile
export const updateCurrentUserId = createAction(
  '[Profile] Update current user id',
  props<{id:number}>()
)
