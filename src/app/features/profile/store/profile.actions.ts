import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const fetchProfiles = createAction(
    `[Profile] Fetch Profiles`,
    props<{ count: number}>()
);

const fetchProfilesSuccess = createAction(
    '[Profile] Fetch Profiles Success',
    props<{ profiles: UserProfile[]}>()
);

const fetchProfilesFailure = createAction('[Profile] Fetch Profiles Failure');

export const profileActions = {
    fetchProfiles,
    fetchProfilesFailure,
    fetchProfilesSuccess
};
