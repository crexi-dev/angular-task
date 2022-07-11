import { createFeatureSelector, createSelector } from '@ngrx/store';
import { profileAdapter } from '@features/profile/store/profile.reducers';
import { ProfileState } from '@interfaces';
import { State } from '@core/routing/store/routing.reducers';
import { ROUTE_NAMES } from '@core/routing';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getRoutingState = createFeatureSelector<State>('routing');

const { selectAll, selectEntities } = profileAdapter.getSelectors();

const getProfileEntities = createSelector(
    getProfileState,
    (state: ProfileState) => selectEntities(state)
);

export const getUserProfiles = createSelector(getProfileState, (state: ProfileState) => selectAll(state));

export const getUserProfile = createSelector(
    getRoutingState,
    getProfileEntities,
    (routingState: State, entities) => {

        if (routingState.name === ROUTE_NAMES.randomProfileDetail) {

            return entities[Object.keys(entities)[0]];

        }

        const id: string = routingState?.currentRoute?.params?.id;
        return id ? entities[id] : null;

    }
);

export const shouldLoadRandomUser = createSelector(
    getRoutingState,
    (routingState: State) => routingState.name === ROUTE_NAMES.randomProfileDetail
);
