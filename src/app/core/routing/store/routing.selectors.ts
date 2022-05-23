import { ActivatedRouteSnapshot } from '@angular/router';
import { getSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './routing.reducers';

const currentRoute = (state: State): ActivatedRouteSnapshot => {

    return state.currentRoute;

};

const currentRouteName = (state: State): string => {

    return state.name;

};

const inProgress = (state: State): boolean => {

    return state.inProgress;

};

const params = (state: State): Record<string, string> => {

    return state.params;

};

const prevRoute = (state: State): ActivatedRouteSnapshot => {

    return state.prevRoute;

};

const prevUrl = (state: State): string => {

    if (state.history.length < 2) {

        return null;

    }
    return state.history[state.history.length - 2].url || null;

};

const queryParams = (state: State): Record<string, string> => {

    return state.queryParams;

};

const url = (state: State): string => {

    return state.url;

};

export const getRouterState = createFeatureSelector<State>('routing');

export const getCurrentRoute = createSelector(getRouterState, currentRoute);
export const getCurrentRouteName = createSelector(getRouterState, currentRouteName);
export const getTransitionInProgress = createSelector(getRouterState, inProgress);
export const getParams = createSelector(getRouterState, params);
export const getPrevState = createSelector(getRouterState, prevRoute);
export const getPrevUrl = createSelector(getRouterState, prevUrl);
export const getQueryParams = createSelector(getRouterState, queryParams);
export const getUrl = createSelector(getRouterState, url);


export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors();
