export interface IProfileDTO {
    info: IResponseDTO;
    results: IProfile[];
}

export interface IProfile {
    cell: string;
    dob: IProfileDob;
    email: string;
    gender: string;
    location: IProfileLocation;
    login: IProfileLogin;
    name: IProfileName;
    nat: string;
    phone: string;
    picture: IProfilePicture;
}

export interface IProfileDob {
    age: number;
    date: string;
}

export interface IProfileLocation {
    city: string;
    coordinates: any;
    postcode: string;
    state: string;
    street: string;
    timezone: any;
}

export interface IProfileLogin {
    uuid: string;
}

export interface IProfileName {
    first: string;
    last: string;
    title: string;
}

export interface IProfilePicture {
    large: string;
    medium: string;
    small: string;
}

export interface IResponseDTO {
    page: number;
    results: number;
    seed: string;
    version: string;
}
