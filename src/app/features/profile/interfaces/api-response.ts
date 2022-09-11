export interface ApiResponse {
    results: UserResults[];
    info: Info;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface UserResults {
    gender: Gender;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateAge;
    registered: DateAge;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: Nationality;
}

export type Gender = 'male' | 'female';

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: TimeZone;
}

export interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface TimeZone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface DateAge {
    date: string;
    age: number;
}

export interface ID {
    name: string;
    value: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export type Nationality =
    | 'AU'
    | 'BR'
    | 'CA'
    | 'CH'
    | 'DE'
    | 'DK'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'IE'
    | 'IN'
    | 'IR'
    | 'MX'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'RS'
    | 'TR'
    | 'UA'
    | 'US';
