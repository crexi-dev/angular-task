/**
 * RANDOM_USER data and schema are from the https://randomuser.me API at version 1.4.
 * All data reflects USA-based profiles.
 * @see https://randomuser.me/documentation
 */

// eslint-disable-next-line max-len
export const RANDOM_USER_URL = 'https://randomuser.me/api/1.4/?nat=us&inc=cell,dob,email,id,location,name,phone,picture';

export interface RANDOM_USER_OBJECT {
    info: Record<string, string|number>,
    results: {
        cell: string,
        dob: {
            date: string,
            age: number
        },
        email: string,
        id: {
          name: string,
          value: string
        },
        location: Record<string, unknown>,
        name: Record<string, string>,
        phone: string,
        picture: Record<string, string>
    }[];
}

export interface RANDOM_USER_API_ERROR {
    error: string;
}
