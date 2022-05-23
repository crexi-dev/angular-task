import { selectRouteParams } from '@core/routing/store';
import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {
    return user;
});

export const getUserProfileList = createSelector(getProfileState, ({usersMap}) => {
  return Array.from(usersMap.values())
});

export const getSelectedUserProfile = createSelector(
  getProfileState,
  selectRouteParams,
  ({usersMap}, params) => {
    return usersMap.get(params?.profileId)
  }
)
 