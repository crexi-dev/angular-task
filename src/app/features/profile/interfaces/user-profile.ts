export interface UserProfile {
    cell: string;
    location: {
        city: string;
        state: string;
    }
    dob: {
        date: string;
        age: number;
    }
    email: string;
    name: {
        first: string;
        last: string;
    }
    phone: string;
    picture: {
        thumbnail: string;
    }
}

export interface Profile {
    name?: string;
}

export interface ProfileResults {
    results: UserProfile[]
}
