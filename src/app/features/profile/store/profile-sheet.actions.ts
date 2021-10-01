import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

export namespace UsersAction {
    export const getUsers = createAction('GET_USERS');
    export const getUsersSuccess = createAction('GET_USERS_SUCCESS', props <{ payload: UserProfile[] }>());
}
