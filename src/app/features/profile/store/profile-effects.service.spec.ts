import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileEffects } from '@features/profile/store/profile-effects.service';
import { ProfileService } from '@features/profile/store/profile.service';
import { ProfileApiResponse } from '@features/profile/interfaces/profile-api';
import { Observable, of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { getProfileList } from '@features/profile/store/profile.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { hot } from 'jest-marbles';
import { parseUserProfilesFromApiResponse } from '@features/profile/store/profile.fns';

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

class MockProfileService implements Partial<ProfileService> {

    getProfileList$ (): Observable<ProfileApiResponse> {

        return of(response);

    }

}

describe('ProfileEffects', () => {

    // let profileService: ProfileService;
    let effects: ProfileEffects;
    let actions$ = new Observable<Action>();

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProfileEffects,
                { provide: ProfileService, useValue: MockProfileService },
                provideMockStore(),
                provideMockActions(() => actions$)
            ]
        });

        // profileService = TestBed.inject(ProfileService);
        effects = TestBed.inject(ProfileEffects);

    });

    it('should return getProfileList action when ngrxOnInitEffects is called', () => {

        expect(effects.ngrxOnInitEffects()).toEqual(getProfileList());

    });

    it('should get user list from API', () => {

        actions$ = hot('-a-|', { a: getProfileList() });

        const expected = hot('-a-|', { a: parseUserProfilesFromApiResponse(response) });

        expect(effects.getProfileList$).toBeObservable(expected);

    });

});
