import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const PROFILE_LIST_INIT = '[Profile] List Init';
export const PROFILE_LIST_SUCCESS = '[Profile] Proflies Fetch Success';
export const PROFILE_LIST_FAILURE = '[Profile] Profiles Fetch Failure';

export const PROFILE_INIT = '[Profile] Fetch';
export const PROFILE_INIT_SUCCESS = '[Profile] Profile Fetch Success';
export const PROFILE_INIT_FAILURE = '[Profile] Profile Fetch Failure';

export const PROFILE_FIND_BY_ID = '[Profile] Find Profile By ID';
export const PROFILE_FIND_BY_ID_SUCCESS = '[Profile] Find Profile By ID Success';
export const PROFILE_FIND_BY_ID_FAILURE = '[Profile] Find Profile By ID Failure';

export const fetchAll = createAction(
    PROFILE_LIST_INIT,
    props<{ users: UserProfile[] }>()
);

export const fetchAllSuccess = createAction(
    PROFILE_LIST_SUCCESS,
    props<{ users: UserProfile[] }>()
);

export const fetchAllFailure = createAction(
    PROFILE_LIST_FAILURE,
    props<{ message: string }>()
);

export const fetch = createAction(
    PROFILE_INIT,
    props<{ user: UserProfile }>()
);

export const fetchSuccess = createAction(
    PROFILE_INIT_SUCCESS,
    props<{ user: UserProfile }>()
);

export const fetchFailure = createAction(
    PROFILE_INIT_FAILURE,
    props<{ message: string }>()
);

export const findById = createAction(
    PROFILE_FIND_BY_ID,
    props<{ id: string }>()
);

export const findByIdSuccess = createAction(
    PROFILE_FIND_BY_ID_SUCCESS,
    props<{ user?: UserProfile }>()
);

export const findByIdFailure = createAction(
    PROFILE_FIND_BY_ID_FAILURE,
    props<{ message: string }>()
);
