import { IUsersSheet } from '@interfaces';
import { createReducer, on } from '@ngrx/store';
import { UsersAction } from '@features/profile/store/profile-sheet.actions';

const initialUsersState: IUsersSheet = {
    users: null
};

export const usersReducer = createReducer(
    initialUsersState,
    on(UsersAction.getUsers, ( state) => ( state )),
    on(UsersAction.getUsersSuccess, ( state, { payload}) => ( {
        ...state,
        users: payload
    }))
);
