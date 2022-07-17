import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileListComponent } from './profile-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListComponent],
            providers: [
                provideMockStore()
            ]
        })
        .compileComponents();

    });

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
