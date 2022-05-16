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
        large: "https://randomuser.me/api/portraits/men/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      location: {
        city: 'Tornesch',
        state: 'Mecklenburg-Vorpommern',
      },
    },
    users: [
      {
        "name": {
          "title": "Ms",
          "first": "Susan",
          "last": "Robertson"
        },
        "location": {
          "city": "Busselton",
          "state": "Queensland",
        },
        "email": "susan.robertson@example.com",
        "dob": {
          "date": "1957-02-02T03:45:56.003Z",
          "age": 65
        },
        "phone": "05-2011-5672",
        "cell": "0440-716-453",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/93.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
        },
      },
      {
        "name": {
          "title": "Mr",
          "first": "Jeppe",
          "last": "Olsen"
        },
        "location": {
          "city": "Aalborg S.Ø.",
          "state": "Hovedstaden",
        },
        "email": "jeppe.olsen@example.com",
        "dob": {
          "date": "1953-12-23T06:22:52.351Z",
          "age": 69
        },
        "phone": "08215408",
        "cell": "84412585",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/43.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
        },
      },
      {
        "name": {
          "title": "Miss",
          "first": "Patsy",
          "last": "Robertson"
        },
        "location": {
          "city": "Perth",
          "state": "Tasmania",
        },
        "email": "patsy.robertson@example.com",
        "dob": {
          "date": "1974-11-26T02:56:06.450Z",
          "age": 48
        },
        "phone": "06-1428-3950",
        "cell": "0400-689-653",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/18.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
        },
      },
      {
        "name": {
          "title": "Mr",
          "first": "آرش",
          "last": "حسینی"
        },
        "location": {
          "city": "زاهدان",
          "state": "یزد",
        },
        "email": "arsh.hsyny@example.com",
        "dob": {
          "date": "1959-05-17T06:57:09.156Z",
          "age": 63
        },
        "phone": "011-06889452",
        "cell": "0980-220-8538",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/74.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
        },
      },
      {
        "name": {
          "title": "Mr",
          "first": "Peetu",
          "last": "Wuollet"
        },
        "location": {
          "city": "Kangasniemi",
          "state": "Kymenlaakso",
        },
        "email": "peetu.wuollet@example.com",
        "dob": {
          "date": "1949-06-23T14:32:55.058Z",
          "age": 73
        },
        "phone": "08-764-677",
        "cell": "041-981-42-30",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/25.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
      },
      {
        "name": {
          "title": "Mr",
          "first": "Micheal",
          "last": "Byrd"
        },
        "location": {
          "city": "Durham",
          "state": "County Down",
        },
        "email": "micheal.byrd@example.com",
        "dob": {
          "date": "1952-07-25T04:04:58.438Z",
          "age": 70
        },
        "phone": "019467 97286",
        "cell": "0787-490-932",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/80.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
        },
      },
      {
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
      {
        "name": {
          "title": "Mr",
          "first": "Aguinaldo",
          "last": "Campos"
        },
        "location": {
          "city": "Aracaju",
          "state": "Mato Grosso",
        },
        "email": "aguinaldo.campos@example.com",
        "dob": {
          "date": "1979-03-23T23:19:25.144Z",
          "age": 43
        },
        "phone": "(33) 2908-0266",
        "cell": "(51) 1494-6075",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/20.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
        },
      },
      {
        "name": {
          "title": "Mr",
          "first": "Alexandre",
          "last": "Guillot"
        },
        "location": {
          "city": "Besançon",
          "state": "Landes",
        },
        "email": "alexandre.guillot@example.com",
        "dob": {
          "date": "1948-07-10T16:27:24.084Z",
          "age": 74
        },
        "phone": "02-71-91-85-92",
        "cell": "06-90-60-57-52",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/35.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
        },
      },
      {
        "name": {
          "title": "Miss",
          "first": "آنیتا",
          "last": "سالاری"
        },
        "location": {
          "city": "اسلام‌شهر",
          "state": "آذربایجان غربی",
        },
        "email": "anyt.slry@example.com",
        "dob": {
          "date": "1959-12-03T13:16:15.202Z",
          "age": 63
        },
        "phone": "062-68015755",
        "cell": "0952-174-4194",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/29.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        },
      }
    ]
  }

  it("should select the profile", () => {
    const result = getProfileState.projector(initialState.user) as UserProfile;
    expect(result.dob.age).toEqual(66);
    expect(result.email).toEqual('friedrich-wilhelm.strohmeier@example.com');
    expect(result.phone).toEqual('0643-6496475');
    expect(result.name.last).toEqual('Strohmeier');
    expect(result.picture.large).toEqual('https://randomuser.me/api/portraits/men/43.jpg');
    expect(result.location.city).toEqual('Tornesch');

  });

  it("should select the profile list", () => {
    const result = getProfileState.projector(initialState.users) as Array<UserProfile>;
    expect(result.length).toEqual(10);
    expect(result[0].dob.age).toEqual(65);
    expect(result[1].email).toEqual('jeppe.olsen@example.com');
    expect(result[2].phone).toEqual('06-1428-3950');
    expect(result[3].name.last).toEqual('حسینی');
    expect(result[4].picture.large).toEqual('https://randomuser.me/api/portraits/men/25.jpg');
    expect(result[5].location.city).toEqual('Durham');
    expect(result[6].dob.date).toEqual('1978-06-13T18:30:24.137Z');
    expect(result[7].name.first).toEqual('Aguinaldo');
    expect(result[8].picture.large).toEqual('https://randomuser.me/api/portraits/men/35.jpg');
    expect(result[9].location.state).toEqual('آذربایجان غربی');
  });
});
