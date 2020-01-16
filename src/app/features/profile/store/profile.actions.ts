import { createAction, props } from '@ngrx/store';
import { UserProfile, UserProfilesDto } from '@interfaces';

const initProfile = createAction('[Profile] Init');

const loadUsers = createAction('[Profile] Load Users');
const loadUsersFailure = createAction(
    '[Profile] Load Users => Failed',
    props<{ error: any }>()
);
const loadUsersSuccess = createAction(
    '[Profile] Load Users => Succeeded',
    props<{ users: UserProfilesDto }>()
);
const selectUserProfile = createAction(
    '[Profile] Select User Profile',
    props<{ selectedUser: UserProfile }>()
);

export const profileActions = {
    initProfile,
    loadUsers,
    loadUsersFailure,
    loadUsersSuccess,
    selectUserProfile
};
