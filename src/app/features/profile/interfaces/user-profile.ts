/**
 * Profile Format Example:
 * const dummyProfile: UserProfile = {
 *     cellNumber: '888-888-8888',
 *     city: 'Los Angeles',
 *     dateOfBirth: 'Jan 1st, 1966',
 *     email: 'test@crexi.com',
 *     firstName: 'First Name',
 *     lastName: 'Last Name',
 *     phoneNumber: '999-999-9999',
 *     picture: '/content/img/default_user.png',
 *     state: 'CA'
 * };
 */
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
    username: string;
}
