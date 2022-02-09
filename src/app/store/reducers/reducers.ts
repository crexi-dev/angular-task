import {InjectionToken} from '@angular/core';
import * as fromRouting from '@core/routing/store/routing.reducers';
import {Action, ActionReducer, ActionReducerMap, createReducer, MetaReducer} from '@ngrx/store';
import {initialState} from "@core/routing/store/routing.reducers";
import {ApiReducers} from "@store/reducers/api.reducers";

export interface AppState {
    routing: fromRouting.State,
    global: {
        ApiData: {
            UserProfile: any,
            Users: any
        }
    }
}

export interface IGlobalState {
    ApiData: GlobalApiDataState
}

export interface GlobalApiDataState {
    UserProfile: any,
    Users: any
}

// @ts-ignore
export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers', {
    // @ts-ignore
    factory: () => {

        return {
            routing: fromRouting.reducer,
            global: globalReducer
        }
    }
});

export const _globalReducer = createReducer(
    initialState,
    ApiReducers.UpdateUsers(),
    ApiReducers.UpdateUserProfile(),
)

export function globalReducer(state: IGlobalState, action: Action) {
    return _globalReducer(state, action);
}

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return (state: AppState, action: any): AppState => {

        // console.log('%c NGRX action ', loggerStyles, action, state);

        return reducer(state, action);

    };

}

export const metaReducers: MetaReducer<AppState>[] = [logger];
