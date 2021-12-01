export interface RandomUser {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    location: {
        street: string;
        city: string;
        state: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    state: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}
