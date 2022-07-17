import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { UserProfile } from '../interfaces';

export const getProfileList = createAction('[UserProfile] Init');

export const loadProfiles = createAction(
    '[UserProfile/API] Load Profiles',
    props<{ profiles: UserProfile[] }>()
);

export const addProfile = createAction(
    '[UserProfile/API] Add UserProfile',
    props<{ profile: UserProfile }>()
);

export const upsertProfile = createAction(
    '[UserProfile/API] Upsert UserProfile',
    props<{ profile: UserProfile }>()
);

export const addProfiles = createAction(
    '[UserProfile/API] Add Profiles',
    props<{ profiles: UserProfile[] }>()
);

export const upsertProfiles = createAction(
    '[UserProfile/API] Upsert Profiles',
    props<{ profiles: UserProfile[] }>()
);

export const updateProfile = createAction(
    '[UserProfile/API] Update UserProfile',
    props<{ profile: Update<UserProfile> }>()
);

export const updateProfiles = createAction(
    '[UserProfile/API] Update Profiles',
    props<{ profiles: Update<UserProfile>[] }>()
);

export const deleteProfile = createAction(
    '[UserProfile/API] Delete UserProfile',
    props<{ id: string }>()
);

export const deleteProfiles = createAction(
    '[UserProfile/API] Delete Profiles',
    props<{ ids: string[] }>()
);

export const clearProfiles = createAction('[UserProfile/API] Clear Profiles');
