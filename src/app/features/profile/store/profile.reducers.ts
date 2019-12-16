import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as profileActions from '@store/actions';


const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, state => state),
    on(profileActions.successProfile, (state: ProfileState, { payload }) => {
        console.log("Payload: ",payload);
        return { 
          ...state, 
          user: payload
        };
    }),
    on(profileActions.errorProfile, (state: ProfileState, err: Error) => {
        console.log('err: ',err);
        return {
            ...state,
            userError: err
        };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {
    return reducer(state, action);
}
