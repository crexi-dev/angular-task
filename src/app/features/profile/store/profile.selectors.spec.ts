import { profilesFeatureKey, ProfileStore, UserProfile } from '@interfaces';
import * as fromProfileSelectors from './profile.selectors';
import { State } from '@core/routing/store/routing.reducers';

const profile1: UserProfile = {
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

const profile2: UserProfile = {
    cellNumber: 'I02 D68-7788',
    city: 'Austin',
    dateOfBirth: 'Jan 28th, 1955',
    email: 'john.roy@example.com',
    firstName: 'John',
    lastName: 'Roy',
    phoneNumber: '123412412',
    picture: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
    state: 'Texas',
    username: 'jroy123'
};

describe('Profile Selectors', () => {

    let rootState: { [profilesFeatureKey]: ProfileStore, routing: State };

    beforeEach(() => {

        rootState = {
            [profilesFeatureKey]: {
                entities: {
                    [profile1.username]: profile1,
                    [profile2.username]: profile2
                },
                ids: [profile1.username, profile2.username],
                isLoaded: true
            },
            routing: {
                currentRoute: null,
                history: [],
                inProgress: false,
                name: null,
                params: {
                    id: profile1.username
                },
                prevRoute: null,
                queryParams: null,
                url: '/'
            }
        };

    });

    it('should selectAllProfiles', () => {

        expect(fromProfileSelectors.selectAllProfiles(rootState).length).toEqual(2);

    });

    it('should selectProfileEntities', () => {

        expect(fromProfileSelectors.selectProfileEntities(rootState)).toEqual(rootState[profilesFeatureKey].entities);

    });

    it('should getProfileByRouteId', () => {

        expect(fromProfileSelectors.getProfileByRouteId(rootState)).toEqual(profile1);

    });

});
