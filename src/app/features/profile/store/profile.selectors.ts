import { createFeatureSelector, createSelector } from '@ngrx/store';
import { profilesFeatureKey, ProfileStore, UserProfile } from '../interfaces';
import { profileEntityAdapter } from '@features/profile/store/profile.reducer';
import { getParams } from '@core/routing/store';
import { Dictionary } from '@ngrx/entity';

export const getProfileState = createFeatureSelector<ProfileStore>(profilesFeatureKey);

const {
    selectAll,
    selectEntities
} = profileEntityAdapter.getSelectors();

export const selectAllProfiles = createSelector(getProfileState, selectAll);

export const selectProfileEntities = createSelector(getProfileState, selectEntities);

export const getProfileByRouteId = createSelector(
    getParams,
    selectProfileEntities,
    selectAllProfiles,
    (
        params: Record<string, string>,
        entities: Dictionary<UserProfile>,
        profiles: UserProfile[]
    ): UserProfile | null => {

        if (params && params.id && entities[params.id]) {

            return entities[params.id];

        } else if (profiles.length) {

            // Random profile if params.id is not defined or id is not in entities
            return profiles[Math.floor(Math.random() * profiles.length)];

        }

        return null;

    }
);
