import { reducer, initialProfileStoreState } from './profile.reducer';
import { ProfileStore, UserProfile } from '@interfaces';
import * as ProfileActions from './profile.actions';
import { Update } from '@ngrx/entity';

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

describe('ProfileStore Reducer', () => {

    it('should addProfile', () => {

        const state: ProfileStore = reducer(initialProfileStoreState, ProfileActions.addProfile({ profile: profile1 }));

        expect(state.entities[profile1.username]).toEqual(profile1);
        expect(state.ids[0]).toEqual(profile1.username);

    });

    it('should upsertProfile', () => {

        const state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.upsertProfile({ profile: profile1 })
        );

        expect(state.entities[profile1.username]).toEqual(profile1);
        expect(state.ids[0]).toEqual(profile1.username);
        expect(state.ids.length).toEqual(1);

    });

    it('should addProfiles', () => {

        const state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.addProfiles({ profiles: [profile1, profile2] })
        );

        expect(state.entities[profile1.username]).toEqual(profile1);
        expect((<string[]>state.ids).includes(profile1.username)).toBe(true);

        expect(state.entities[profile2.username]).toEqual(profile2);
        expect((<string[]>state.ids).includes(profile2.username)).toBe(true);

    });

    it('should upsertProfiles', () => {

        const state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.upsertProfiles({ profiles: [profile1, profile2] })
        );

        expect(state.entities[profile1.username]).toEqual(profile1);
        expect((<string[]>state.ids).includes(profile1.username)).toBe(true);

        expect(state.entities[profile2.username]).toEqual(profile2);
        expect((<string[]>state.ids).includes(profile2.username)).toBe(true);

    });

    it('should updateProfile', () => {

        let state: ProfileStore = reducer(initialProfileStoreState, ProfileActions.addProfile({ profile: profile1 }));

        const update: Update<UserProfile> = {
            changes: {
                email: 'foo@bar.com'
            },
            id: profile1.username
        };

        state = reducer(state, ProfileActions.updateProfile({ profile: update }));

        expect(state.entities[profile1.username].email).toEqual(update.changes.email);

    });

    it('should updateProfiles', () => {

        let state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.addProfiles({ profiles: [profile1, profile2] })
        );

        const update1: Update<UserProfile> = {
            changes: {
                email: 'foo@bar.com'
            },
            id: profile1.username
        };

        const update2: Update<UserProfile> = {
            changes: {
                email: 'bum@baz.com'
            },
            id: profile2.username
        };

        state = reducer(state, ProfileActions.updateProfiles({ profiles: [update1, update2] }));

        expect(state.entities[profile1.username].email).toEqual(update1.changes.email);
        expect(state.entities[profile2.username].email).toEqual(update2.changes.email);

    });

    it('should deleteProfile', () => {

        let state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.addProfiles({ profiles: [profile1, profile2] })
        );

        state = reducer(state, ProfileActions.deleteProfile({ id: profile1.username }));

        expect((<string[]>state.ids).includes(profile1.username)).toBe(false);

    });

    it('should deleteProfiles', () => {

        let state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.addProfiles({ profiles: [profile1, profile2] })
        );

        state = reducer(state, ProfileActions.deleteProfiles({ ids: [profile1.username, profile2.username] }));

        expect(state.ids.length).toEqual(0);

    });

    it('should clearProfiles', () => {

        let state: ProfileStore = reducer(
            initialProfileStoreState,
            ProfileActions.addProfiles({ profiles: [profile1, profile2] })
        );

        state = reducer(state, ProfileActions.clearProfiles());

        expect(state.ids.length).toEqual(0);

    });

});
