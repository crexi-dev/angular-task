export interface FetchedUser {
    "results": UserResult[],
    "info": {
        "seed": string,
        "results": number,
        "page": number,
        "version": string
    }
}


export interface UserResult {
    "gender": string,
    "name": UserName,
    "location": UserLocation,
    "email": string,
    "login": UserLogin
    "dob": UserDoB,
    "registered": UserRegistrationDate,
    "phone": string,
    "cell": string,
    "id": UserId,
    "picture": UserPicture,
    "nat": string
}

export interface UserName {
    "title": string,
    "first": string,
    "last": string,
}

export interface UserLocation {
    "street": string,
    "city": string,
    "state": string,
    "postcode": string,
    "coordinates": {
        "latitude": string,
        "longitude": string
    },
    "timezone": {
        "offset": string,
        "description": string
    }
}

export interface UserLogin {
    "uuid": string,
    "username": string,
    "password": string,
    "salt": string,
    "md5": string,
    "sha1": string,
    "sha256": string
}

export interface UserDoB {
    "date": string,
    "age": number
}

export interface UserRegistrationDate {
    "date": string,
    "age": number
}

export interface UserId {
    "name": string,
    "value": string
}

export interface UserPicture {
    "large": string;
    "medium": string;
    "thumbnail": string;
}
