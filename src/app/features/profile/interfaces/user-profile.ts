export interface IUserProfile {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
    id?: string;
}

export interface IUserProfileRawResponse {
    results: IUserProfileResult[];
    info: any;
}

export interface IUserProfileResult {
    gender: string,
    name: any;
    location: any,
    email: string,
    login: any,
    dob: any,
    registered: any,
    phone: string,
    cell: string,
    id: any,
    picture: any,
    nat: string
}
