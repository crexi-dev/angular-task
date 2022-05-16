import * as fromReducer from './profile.reducers';
import { profileActions } from './profile.actions';
import { ProfileState } from '../interfaces';

describe('ProfileReducer', () => {

  it('initProfile action: should initialize a user profile and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: ProfileState = {
      user: {
        "name": {
          "title": "Mr",
          "first": "Klaus-Michael",
          "last": "Stracke"
        },
        "location": {
          "city": "Gedern",
          "state": "Nordrhein-Westfalen",
        },
        "email": "klaus-michael.stracke@example.com",
        "dob": {
          "date": "1978-06-13T18:30:24.137Z",
          "age": 44
        },
        "phone": "0360-8495516",
        "cell": "0179-9907499",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/81.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
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
          "name": {
            "title": "Mr",
            "first": "Justino",
            "last": "da Mota"
          },
          "location": {
            "city": "Alagoinhas",
            "state": "Piauí",
          },
          "email": "justino.damota@example.com",
          "dob": {
            "date": "1960-04-28T05:18:22.026Z",
            "age": 62
          },
          "phone": "(79) 7402-7997",
          "cell": "(48) 1812-8581",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/71.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Rolim",
            "last": "Barros"
          },
          "location": {
            "city": "Guarapari",
            "state": "São Paulo",
          },
          "email": "rolim.barros@example.com",
          "dob": {
            "date": "1972-02-24T06:30:02.729Z",
            "age": 50
          },
          "phone": "(19) 9382-5813",
          "cell": "(68) 9457-5106",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/48.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Vilho",
            "last": "Laitinen"
          },
          "location": {
            "city": "Ylivieska",
            "state": "Northern Ostrobothnia",
          },
          "email": "vilho.laitinen@example.com",
          "dob": {
            "date": "1955-10-22T08:00:18.302Z",
            "age": 67
          },
          "phone": "07-510-138",
          "cell": "049-425-09-49",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/82.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Toby",
            "last": "Wilson"
          },
          "location": {
            "city": "Wellington",
            "state": "Bay of Plenty",
          },
          "email": "toby.wilson@example.com",
          "dob": {
            "date": "1977-03-17T03:48:26.681Z",
            "age": 45
          },
          "phone": "(325)-146-8406",
          "cell": "(510)-936-7474",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/61.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
          },
        },
        {
          "name": {
            "title": "Miss",
            "first": "Laurie",
            "last": "Tremblay"
          },
          "location": {
            "city": "Hampton",
            "state": "Prince Edward Island",
          },
          "email": "laurie.tremblay@example.com",
          "dob": {
            "date": "1998-06-24T05:31:46.754Z",
            "age": 24
          },
          "phone": "489-925-6012",
          "cell": "268-906-3513",
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/34.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
          },
        },
        {
          "name": {
            "title": "Ms",
            "first": "محیا",
            "last": "صدر"
          },
          "location": {
            "city": "یزد",
            "state": "مرکزی",
          },
          "email": "mhy.sdr@example.com",
          "dob": {
            "date": "1966-11-10T07:42:52.713Z",
            "age": 56
          },
          "phone": "054-99214784",
          "cell": "0966-051-6509",
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/19.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Julio",
            "last": "Cole"
          },
          "location": {
            "city": "Castlebar",
            "state": "Sligo",
          },
          "email": "julio.cole@example.com",
          "dob": {
            "date": "1968-09-27T16:41:47.628Z",
            "age": 54
          },
          "phone": "011-423-6247",
          "cell": "081-545-1581",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/88.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
          },
        },
        {
          "name": {
            "title": "Mrs",
            "first": "Diantha",
            "last": "Van Duijnhoven"
          },
          "location": {
            "city": "Wiuwert",
            "state": "Drenthe",
          },
          "email": "diantha.vanduijnhoven@example.com",
          "dob": {
            "date": "1995-07-13T23:17:57.943Z",
            "age": 27
          },
          "phone": "(568)-555-0312",
          "cell": "(485)-147-3010",
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/67.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Eetu",
            "last": "Erkkila"
          },
          "location": {
            "city": "Joroinen",
            "state": "Kainuu",
          },
          "email": "eetu.erkkila@example.com",
          "dob": {
            "date": "1973-02-28T05:55:18.735Z",
            "age": 49
          },
          "phone": "09-741-837",
          "cell": "048-843-43-97",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
          },
        },
        {
          "name": {
            "title": "Mr",
            "first": "Anania",
            "last": "Costa"
          },
          "location": {
            "city": "Colatina",
            "state": "Ceará",
          },
          "email": "anania.costa@example.com",
          "dob": {
            "date": "1973-07-26T15:32:56.906Z",
            "age": 49
          },
          "phone": "(01) 5934-2232",
          "cell": "(00) 2844-2383",
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/50.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
          },
        }
      ]
    };

    const action = profileActions.retrieveProfiles({ profiles: newState.users });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

});
