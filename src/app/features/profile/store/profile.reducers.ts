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

const profileInitialState: ProfileState = profileAdapter.getInitialState({
    selectedId: ''
});

const reducer = createReducer(
    profileInitialState,

    on(profileActions.initProfileSuccess, (state, { profile }) => ({ ...state, user: profile })),

    on(profileActions.initProfilesSuccess, (state, { profiles }) => profileAdapter.setAll(profiles,{
        ...state
    })),

    on(profileActions.selectUser, (state, { id }) => ({ ...state, selectedId: id }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
