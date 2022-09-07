export enum RandomUserApiResponseFormat {
    csv = 'csv',
    json = 'json',
    pretty = 'pretty',
    xml = 'xml',
    yaml = 'yaml',
}

export enum RandomUserApiUserGender {
    female = 'female',
    male = 'male',
}

export enum RandomUserApiUserNationality {
    AU = 'au',
    BR = 'br',
    CA = 'ca',
    CH = 'ch',
    DE = 'de',
    DK = 'dk',
    ES = 'es',
    FI = 'fi',
    FR = 'fr',
    GB = 'gb',
    IE = 'ie',
    IN = 'in',
    IR = 'ir',
    MX = 'mx',
    NL = 'nl',
    NO = 'no',
    NZ = 'nz',
    RS = 'rs',
    TR = 'tr',
    UA = 'ua',
    US = 'us'
}

export interface RandomUserApiRequestParams {
    exc?: string;
    format?: RandomUserApiResponseFormat
    gender?: RandomUserApiUserGender;
    inc?: string;
    nat?: RandomUserApiUserNationality;
    page?: number;
    password?: string;
    results?: number;
    seed?: string;
}

export interface RandomUserApiResponseData {
    info: RandomUserApiInfo;
    results: RandomUserApiUser[];
}

export interface RandomUserApiError {
    error: string;
}

export type RandomUserApiResponse = RandomUserApiResponseData | RandomUserApiError;

export interface RandomUserApiUserLocation {
    street: {
        number: number;
        name: string;
    }
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
        latitude: string;
        longitude: string;
    }
    timezone: {
        offset: string;
        description: string;
    }
}

export interface RandomUserApiUserLogin {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
}

export interface RandomUserApiUserName {
    first: string;
    last: string;
    title: string;
}

export interface RandomUserApiUserDob {
    age: number;
    date: string;
}

export interface RandomUserApiUserRegistered {
    age: number;
    date: string;
}

export interface RandomUserApiUserId {
    name: string;
    value: string;
}

export interface RandomUserApiUserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface RandomUserApiUser {
    cell: string;
    dob: RandomUserApiUserDob;
    email: string;
    gender: RandomUserApiUserGender;
    id: RandomUserApiUserId;
    location: RandomUserApiUserLocation;
    login: RandomUserApiUserLogin;
    name: RandomUserApiUserName;
    nat: RandomUserApiUserNationality;
    phone: string;
    picture: RandomUserApiUserPicture
    registered: RandomUserApiUserRegistered;
}

export interface RandomUserApiInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}
