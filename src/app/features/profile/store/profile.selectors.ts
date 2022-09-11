import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const hasRandomProfileLoaded = createSelector(
    getProfileState,
    (state) => state.randomProfile.isLoaded
);

export const getRandomProfile = createSelector(
    getProfileState,
    (state) => state.randomProfile.profile
);

export const getRandomProfileError = createSelector(
    getProfileState,
    (state) => state.randomProfile.error
);

export const areAllProfilesLoaded = createSelector(
    getProfileState,
    (state) => state.allProfiles.isLoaded
);

export const getAllProfiles = createSelector(
    getProfileState,
    (state) => state.allProfiles.profiles
);

export const getAllProfilesError = createSelector(
    getProfileState,
    (state) => state.allProfiles.error
);

export const getProfileWithId = (profileId: number) => 
    createSelector(
        getProfileState,
        (state) => (state.allProfiles.profiles 
                    && state.allProfiles.profiles.find((f) => f.id === profileId)) 
            ? state.allProfiles.profiles.find((f) => f.id === profileId)
            : null
    );
