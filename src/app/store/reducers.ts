import { InjectionToken } from '@angular/core';
import * as fromRouting from '@core/routing/store/routing.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
    routing: fromRouting.State;
    router: RouterReducerState;
}

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
    'App Reducers',
    { factory: () => ({ routing: fromRouting.reducer, router: routerReducer }) }
);

export function logger (reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return (state: AppState, action: any): AppState => reducer(state, action);

}

export const metaReducers: MetaReducer<AppState>[] = [logger];
