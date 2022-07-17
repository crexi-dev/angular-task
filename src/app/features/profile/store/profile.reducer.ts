import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProfileActions from './profile.actions';
import { ProfileStore, UserProfile } from '../interfaces';

export function selectUserId (a: UserProfile): string {

    return a.username;

}

export const profileEntityAdapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>({
    selectId: selectUserId
});

export const initialState: ProfileStore = profileEntityAdapter.getInitialState({
    isLoaded: false
});

export const reducer = createReducer(
    initialState,
    on(
        ProfileActions.addProfile,
        (state, action) => profileEntityAdapter.addOne(action.profile, { ...state, isLoaded: true })
    ),
    on(
        ProfileActions.upsertProfile,
        (state, action) => profileEntityAdapter.upsertOne(action.profile, { ...state, isLoaded: true })
    ),
    on(
        ProfileActions.addProfiles,
        (state, action) => profileEntityAdapter.addMany(action.profiles, { ...state, isLoaded: true })
    ),
    on(
        ProfileActions.upsertProfiles,
        (state, action) => profileEntityAdapter.upsertMany(action.profiles, { ...state, isLoaded: true })
    ),
    on(
        ProfileActions.updateProfile,
        (state, action) => profileEntityAdapter.updateOne(action.profile, state)
    ),
    on(
        ProfileActions.updateProfiles,
        (state, action) => profileEntityAdapter.updateMany(action.profiles, state)
    ),
    on(
        ProfileActions.deleteProfile,
        (state, action) => {

            const _state: ProfileStore = profileEntityAdapter.removeOne(action.id, state);
            return _state.ids.length ? { ..._state, isLoaded: true } : { ..._state, isLoaded: false };

        }
    ),
    on(
        ProfileActions.deleteProfiles,
        (state, action) => {

            const _state: ProfileStore = profileEntityAdapter.removeMany(action.ids, state);
            return _state.ids.length ? { ..._state, isLoaded: true } : { ..._state, isLoaded: false };

        }
    ),
    on(
        ProfileActions.loadProfiles,
        (state, action) => profileEntityAdapter.setAll(action.profiles, { ...state, isLoaded: true })
    ),
    on(
        ProfileActions.clearProfiles,
        (state) => profileEntityAdapter.removeAll({ ...state, isLoaded: false })
    )
);

export function getProfileReducer (state: ProfileStore | undefined, action: Action) {

    return reducer(state, action);

}
