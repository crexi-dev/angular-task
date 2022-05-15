import * as fromReducer from './profile.reducers';
import { profileActions } from './profile.actions';
import { ProfileState } from '../interfaces';

describe('ProfileReducer', () => {

  it('initProfile action: should initialize a user profile and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: ProfileState = {
      user: {
        cell: '',
        dob: {
          date: '',
          age: 0,
        },
        email: '',
        name: {
          title: '',
          first: '',
          last: '',
        },
        phone: '',
        picture: {
          large: '',
          medium: '',
          thumbnail: '',
        },
        location: {
          city: '',
          state: '',
        },
      },
    };

    const action = profileActions.initProfile({ profile: newState.user });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('retrieveProfiles action: should retrieve user profiles and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: ProfileState = {
      users: [
        {
          cell: '',
          dob: {
            date: '',
            age: 0,
          },
          email: '',
          name: {
            title: '',
            first: '',
            last: '',
          },
          phone: '',
          picture: {
            large: '',
            medium: '',
            thumbnail: '',
          },
          location: {
            city: '',
            state: '',
          },
        },
      ]
    };

    const action = profileActions.retrieveProfiles({ profiles: newState.users });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

});
