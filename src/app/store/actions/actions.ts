import {createAction} from "@ngrx/store";

export * from '@core/routing/store/routing.actions';
export * from '@features/profile/store/profile.actions';

const actionType = `[API]`;

export class Actions {
    static UpdateUsers() {
        return createAction(`${actionType} Update Users`);
    }
}
