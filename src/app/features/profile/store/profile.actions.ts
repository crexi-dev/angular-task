import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');

const fetchUsers = createAction('[Profile] Fetch Users');
const fetchUsersSuccess = createAction('[Profile] Fetch Users Success', props<{ users: UserProfile[] }>());
const fetchUsersFailure = createAction('[Profile] Fetch Users Failure', props<{ error?: string }>());
const selectUserUuid = createAction('[Profile] Select User', props<{ uuid: string }>());

export const profileActions = {
    fetchUsers,
    fetchUsersFailure,
    fetchUsersSuccess,
    initProfile,
    selectUserUuid
};
