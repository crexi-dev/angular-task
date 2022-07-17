/**
 * Interfaces dirived from http://json2ts.com/ using api response.
 */

export interface ProfileName {
    title: string;
    first: string;
    last: string;
}

export interface ProfileStreet {
    number: number;
    name: string;
}

export interface ProfileCoordinates {
    latitude: string;
    longitude: string;
}

export interface ProfileTimezone {
    offset: string;
    description: string;
}

export interface ProfileLocation {
    street: ProfileStreet;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: ProfileCoordinates;
    timezone: ProfileTimezone;
}

export interface ProfileLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface ProfileDOB {
    date: Date;
    age: number;
}

export interface ProfileRegistered {
    date: Date;
    age: number;
}

export interface ProfileId {
    name: string;
    value: string;
}

export interface ProfilePicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface ProfileApiResult {
    gender: string;
    name: ProfileName;
    location: ProfileLocation;
    email: string;
    login: ProfileLogin;
    dob: ProfileDOB;
    registered: ProfileRegistered;
    phone: string;
    cell: string;
    id: ProfileId;
    picture: ProfilePicture;
    nat: string;
}

export interface ProfileApiInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface ProfileApiResponse {
    results: ProfileApiResult[];
    info: ProfileApiInfo;
}
