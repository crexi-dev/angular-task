export interface UserProfile {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
}

export interface UserProfileResponse {
    results: IUserProfileResults[]
}

export interface IUserProfileResults {
    cell: string;
    dob: IUserDOB;
    email: string;
    gender: string;
    id: IUserId;
    location: IUserLocation;
    login: IUserLogin;
    name: IUserName
    nat: string
    phone: string
    picture: IPicture
    registered: IRegistered
}

interface IUserDOB {
    date: string;
    age: number;
}

interface IUserId {
    name: string;
    value: string;
}

interface IUserLocation {
    city: string;
    coordinates: ICoordinates
    country: string
    postcode: number
    state: string
    street: IStreet
    timezone: ITimezone;
}

interface ICoordinates {
    latitude: string;
    longitude: string
}

interface IStreet {
    number: number;
    name: string;
}
interface ITimezone {
    offset: string;
    description: string;
}

interface IUserLogin {
    uuid: string;
    username: string, 
    password: string, 
    salt: string, 
    md5: string,
    sha1: string
    sha256: string
}

interface IUserName {
    title: string, 
    first: string, 
    last: string
}

interface IPicture {
    large: string;
    medium: string, 
    thumbnail: string;
}

interface IRegistered {
    date: string, 
    age: 3
}
