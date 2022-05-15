import { ProfileState, UserProfile } from '../interfaces';
import { getProfileState } from '../store/profile.selectors';

describe('Profile selectors', () => {

  const initialState: ProfileState = {
    user: {
      cell: '0174-7567615',
      dob: {
        date: '1956-03-19T03:44:36.341Z',
        age: 66,
      },
      email: 'friedrich-wilhelm.strohmeier@example.com',
      name: {
        title: 'Mr',
        first: 'Friedrich',
        last: 'Strohmeier',
      },
      phone: '0643-6496475',
      picture: {
        large: '',
        medium: '',
        thumbnail: '',
      },
      location: {
        city: 'Tornesch',
        state: 'Mecklenburg-Vorpommern',
      },
    },
    users: [
      {
        cell: '0174-7567615',
        dob: {
          date: '1956-03-19T03:44:36.341Z',
          age: 66,
        },
        email: 'friedrich-wilhelm.strohmeier@example.com',
        name: {
          title: 'Mr',
          first: 'Friedrich',
          last: 'Strohmeier',
        },
        phone: '0643-6496475',
        picture: {
          large: '',
          medium: '',
          thumbnail: '',
        },
        location: {
          city: 'Tornesch',
          state: 'Mecklenburg-Vorpommern',
        },
      }
    ]
  }

  it("should select the profile", () => {
    const result = getProfileState.projector(initialState.user) as UserProfile;
    expect(result.dob.age).toEqual(66);
  });

  it("should select the profile list", () => {
    const result = getProfileState.projector(initialState.users) as Array<UserProfile>;
    expect(result.length).toEqual(1);
    expect(result[0].dob.age).toEqual(66);
  });
});