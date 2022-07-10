import { createFeatureSelector, createSelector } from '@ngrx/store';
import { profileAdapter } from '@features/profile/store/profile.reducers';
import { ProfileState } from '@interfaces';
import { State } from '@core/routing/store/routing.reducers';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getRoutingState = createFeatureSelector<State>('routing');

const { selectAll, selectEntities } = profileAdapter.getSelectors();

const getProfileEntities = createSelector(
    getProfileState,
    (state: ProfileState) => selectEntities(state)
);

export const getUserProfile = createSelector(
    getRoutingState,
    getProfileState,
    getProfileEntities,
    (routingState: State, { user }, entities) => {

        if (routingState.name === 'randomProfileDetail') {

            return user;

        }

        const id: string = routingState?.currentRoute?.params?.id;
        return id ? entities[id] : null;

    }
);

export const shouldLoadRandomUser = createSelector(
    getRoutingState,
    (routingState: State) => routingState.name === 'randomProfileDetail'
);

export const getUserProfiles = createSelector(getProfileState, (state: ProfileState) => selectAll(state));
