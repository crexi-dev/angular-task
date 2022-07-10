import { createFeatureSelector, createSelector } from '@ngrx/store';
import { profileAdapter } from '@features/profile/store/profile.reducers';
import { Dictionary } from '@ngrx/entity';
import { ProfileState, UserProfile } from '@interfaces';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

const { selectAll, selectEntities } = profileAdapter.getSelectors();

export const getUserProfile = createSelector(getProfileState, ({ user }) => user);

export const getUserProfiles = createSelector(getProfileState, (state: ProfileState) => selectAll(state));

const getProductEntities = createSelector(
    getProfileState,
    (state: ProfileState) => selectEntities(state)
);

const getSelectedId = createSelector(getProfileState, (state: ProfileState) => state.selectedId);

export const getUser = createSelector(
    getProductEntities,
    getSelectedId,
    (entities: Dictionary<UserProfile>, selectedId) => entities[selectedId]
);
