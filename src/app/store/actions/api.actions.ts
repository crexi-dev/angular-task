import {createAction, props} from '@ngrx/store';

const actionType = '[API ACTION]';

export class ApiActions {
    static UpdateUsers() {
        return createAction(`${actionType} Update Users from Api`, props<{ payload: any }>());
    }

    static UpdateUserProfile() {
        return createAction(`${actionType} Update User Profile`, props<{ payload: any }>());
    }
}
