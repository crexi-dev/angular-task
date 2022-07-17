import { daySuffix, formatDate, parseUserProfilesFromApiResponse } from '@features/profile/store/profile.fns';
import { ProfileApiResponse } from '@features/profile/interfaces/profile-api';

describe('Date', () => {

    describe('daySuffix', () => {

        it('should add st suffix', () => {

            expect(daySuffix(1)).toBe('st');

        });

        it('should add nd suffix', () => {

            expect(daySuffix(2)).toBe('nd');

        });

        it('should add rd suffix', () => {

            expect(daySuffix(3)).toBe('rd');

        });

        it('should add th suffix', () => {

            expect(daySuffix(4)).toBe('th');

        });

    });

    describe('formatDate', () => {

        it('should add st suffix', () => {

            expect(formatDate(new Date('1982-08-11T05:19:56.913Z'))).toBe('Aug 11th, 1982');

        });

    });

    describe('parseUserProfilesFromApiResponse', () => {

        it('should transform response item to UserProfile format', () => {

            const response: ProfileApiResponse = {
                info: { page: 1, results: 10, seed: '8401ebc9c9501fbf', version: '1.4' },
                results: [
                    {
                        cell: 'I02 D68-7701',
                        dob: { age: 67, date: '1955-02-28T10:00:04.795Z' },
                        email: 'mia.roy@example.com',
                        gender: 'female',
                        id: { name: 'SIN', value: '512093204' },
                        location: {
                            city: 'Selkirk',
                            coordinates: { latitude: '-64.5985', longitude: '35.3146' },
                            country: 'Canada',
                            postcode: 'X1V 3R8',
                            state: 'British Columbia',
                            street: { name: 'West Ave', number: 4113 },
                            timezone: { description: 'Beijing, Perth, Singapore, Hong Kong', offset: '+8:00' }
                        },
                        login: {
                            md5: 'ae0a1357d673f6a56197ec90760b7c63',
                            password: 'children',
                            salt: 'Qwue8znK',
                            sha1: '13989713110c166034bdf36df6b0010041c75834',
                            sha256: '09bb9be233ce5c1c4a666eb59ada465fc7eb5e1b5ec789e9e772a9744ba0b032',
                            username: 'heavyswan118',
                            uuid: 'dced6fb1-4a55-41f6-b937-d0226b24f2b6'
                        },
                        name: { first: 'Mia', last: 'Roy', title: 'Ms' },
                        nat: 'CA',
                        phone: 'T12 Z17-4169',
                        picture: {
                            large: 'https://randomuser.me/api/portraits/women/40.jpg',
                            medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg'
                        },
                        registered: { age: 17, date: '2005-03-14T21:41:12.546Z' }
                    }
                ]
            };

            const expected = {
                cellNumber: 'I02 D68-7701',
                city: 'Selkirk',
                dateOfBirth: 'Feb 28th, 1955',
                email: 'mia.roy@example.com',
                firstName: 'Mia',
                lastName: 'Roy',
                phoneNumber: 'T12 Z17-4169',
                picture: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
                state: 'British Columbia',
                username: 'heavyswan118'
            };

            expect(parseUserProfilesFromApiResponse(response)).toEqual({
                profiles: [expected],
                type: '[UserProfile/API] Upsert Profiles'
            });

        });

    });

});
