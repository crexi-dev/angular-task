import { AppState } from '@store/reducers';
import { UserProfile } from './user-profile';
import { HttpErrorResponse } from '@angular/common/http';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { reducer } from '../store/profile.reducers';

export interface ProfileStateDetails {
    error: HttpErrorResponse | string;
    loading: boolean;

    selectedUser: UserProfile;
    users: UserProfile[];
}

export const FEATURE_NAME = 'profile';
export const selectProfile = createFeatureSelector<State, ProfileState>(FEATURE_NAME);

export const reducers: ActionReducerMap<ProfileState> = {
    state: reducer
};

export interface ProfileState {
    state: ProfileStateDetails;
}

export interface State extends AppState {
    profile: ProfileState;
}
