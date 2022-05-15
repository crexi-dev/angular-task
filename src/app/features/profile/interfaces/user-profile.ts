export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Location {
    city: string;
    state: string;
}

export interface DateOfBirth {
    date: string;
    age: number;
}
export interface UserProfile {
    cell: string;
    dob: DateOfBirth;
    email: string;
    name: Name;
    phone: string;
    picture: Picture;
    location: Location;

}
