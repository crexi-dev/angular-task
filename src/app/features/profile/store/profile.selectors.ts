import { ProfileState } from "@interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getProfileState = createFeatureSelector<ProfileState>("profile");

export const getUserProfiles = createSelector(
    getProfileState,
    (state: ProfileState) => state.users
);

export const getSelectedUserProfile = createSelector(
    getProfileState,
    (state: ProfileState) => {
        return state.users.length > 0
            ? state.users[state.selectedUser || 0]
            : null;
    }
);
