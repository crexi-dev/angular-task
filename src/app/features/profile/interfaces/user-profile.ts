import { format as dateFnsFormat } from 'date-fns';

export interface UserProfile {
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
    thumbnail?: string;
}

/**
 * Formats a date string to "MMM do, yyyy" (Jan 1st, 1966).
 *
 * Useful for matching the `UserProfile.dateOfBirth` formatting.
 *
 * @param {string} dateString
 * @returns {string}
 */
export const setDateOfBirth = (dateString: string) => dateFnsFormat(new Date(dateString), 'MMM do, yyyy');
