import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { UserProfile } from '../interfaces';

const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {
    user: null,
    entities: {},
    isLoading: false,
    ids: [],
    page: 1,
    limit: 10, // this is default limit but it can be changed whe dispatch action
    error: null,
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state, {id}) => {
        return {
            ...state,
            user: state.entities[id] || dummyProfile
        };
    }),
    on(profileActions.searchProfile, (state, {page, limit}) => {
        return {
            ...state,
            ids: [],
            entities: {},
            error: null,
            page: page || state.page,
            limit: limit || state.limit,
            isLoading: true,
        };
    }),
    on(profileActions.searchProfileSuccess, (state, { entities }) => {
        const result: { ids: string[], entities: { [key: string]: UserProfile } }
            = entities.reduce((acc, entity, index) => {
                const id = `${index}`;

                acc.entities = {...acc.entities, [id]: entity}
                acc.ids.push(id);

                return acc;
            },
            { ids: [], entities: {} }
        );

        return {
            ...state,
            ...result,
            isLoading: false,
        };
    }),
    on(profileActions.searchProfileFailed, (state, { error }) => {

        return {
            ...state,
            error: error,
            entities: {},
            ids: [],
            isLoading: false,
        };
    }),
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);
}
