import {} from "@store/actions/actions";
import {on} from "@ngrx/store";
import {ApiActions} from "@store/actions/api.actions";
import {IGlobalState} from "../../models/store/global-state.model";
import {GlobalActions} from "@store/actions/global.actions";

export class ApiReducers {
    static UpdateUsers() {
        return on(
            GlobalActions.Api.UpdateUsers,
            (state: IGlobalState, action) => {
                return Object.assign({}, state, {global: {ApiData: {...state.global.ApiData, Users: action.payload}}})
            }
        )
    }

    static UpdateUserProfile() {
        return on(
            ApiActions.UpdateUserProfile(),
            (state: IGlobalState, action) => {
                return Object.assign({}, state, { global: {ApiData: {...state.global.ApiData, UserProfile: action.payload }}})
            }
        )
    }
}
