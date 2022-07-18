import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileListComponent } from './profile-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { LayoutModule } from '@core/layout/layout.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule } from '@angular/material/table';
import { profilesFeatureKey, UserProfile } from '@interfaces';
import { routingActions } from '@core/routing/store/routing.actions';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';

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

describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;
    let store: Store;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListComponent],
            imports: [LayoutModule, MatIconModule, MatTableModule, RouterTestingModule],
            providers: [
                provideMockStore({
                    initialState: {
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
                    }
                })
            ]
        })
        .compileComponents();

        store = TestBed.inject(Store);

    });

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should selectAllProfiles', () => {

        component.ngOnInit();
        expect(component.dataSource.length).toEqual(2);

    });

    it('should select user profile', () => {

        jest.spyOn(store, 'dispatch');

        component.selectProfile(profile1);

        expect(store.dispatch).toHaveBeenCalledWith(routingActions.go({ url: `profile/${profile1.username}` }));

    });

    it('should set displayColumns', () => {

        expect(component.displayedColumns).toEqual(['firstName', 'lastName', 'email', 'phoneNumber', 'action']);

    });

});
