import { profilesFeatureKey, ProfileStore, UserProfile } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { profileEntityAdapter } from '../profile.reducer';

export const getProfileState = createFeatureSelector<ProfileStore>(profilesFeatureKey);

export const {
    selectAll
} = profileEntityAdapter.getSelectors();

export const selectAllProfiles = createSelector(getProfileState, selectAll);

// export const getUserProfileById = (id: string | null | undefined) => createSelector(selectAllProfiles, (profiles: UserProfile[]): UserProfile => {
//
//
// });
