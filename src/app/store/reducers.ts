import { InjectionToken } from '@angular/core';
import * as fromRouting from '@core/routing/store/routing.reducers';
import * as fromProfile from '../features/profile/store/profile.reducers';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ProfileState } from '@interfaces';

export interface AppState {
    routing: fromRouting.State,
    profiles: ProfileState,
}

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
    'App Reducers',
    {
        factory: () => ({
            profiles: fromProfile.getProfileReducer,
            routing: fromRouting.reducer
        })
    }
);

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return (state: AppState, action: any): AppState => reducer(state, action);

}

export const metaReducers: MetaReducer<AppState>[] = [logger];
