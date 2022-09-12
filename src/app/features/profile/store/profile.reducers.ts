import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};
const profileListState: ProfileState = {};

export interface State {
    user: [];
}

const reducer = createReducer(
    initialState,
    on(profileActions.getUserDataSuccessResult, (state, result) => {
        return result;
    })
);

const topUserReducer = createReducer(
    profileListState,
    on(profileActions.getTopUserDataSuccessResult, (state, result) =>{ 
        console.log('lllllllllllll', result)
        return result})
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}

export function getTopUserReducer (state: ProfileState | undefined, action: Action) {
    console.log(state, action)
    return topUserReducer(state, action);

}
