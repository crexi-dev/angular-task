import { ProfileState, UserProfile } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

function selectId (user: UserProfile) {

    return user.id;

}

export const profileAdapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>({
    selectId
});

const profileInitialState: ProfileState = profileAdapter.getInitialState({});

const reducer = createReducer(
    profileInitialState,

    on(profileActions.fetchProfilesSuccess, (state, { profiles }) => profileAdapter.setAll(profiles,{
        /**
         * would normally add a loading: true state in fetchProfiles action
         * handler and change it to false here and in error reducer action handler
         */
        ...state
    }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
