import { IUserProfile, IUserProfileListState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/router/custom-serializer';
import { getCurrentRoute } from 'src/app/router/router.selectors';

export const getProfileState = createFeatureSelector<IUserProfileListState>('profile');

export const hasUserProfileLoaded = createSelector(getProfileState, ({ loaded }): boolean => loaded);

export const getUserProfileList = createSelector(getProfileState, ({ data }): IUserProfile[] => data);

export const getUserDetailsById = createSelector(
    getProfileState,
    getCurrentRoute,
    (profiles: IUserProfileListState, route: RouterStateUrl) =>
        Object.keys(route.params)?.length === 0 ? profiles?.data[0]
            : profiles.data.find((user) => user.id === route.params['id'])
);
