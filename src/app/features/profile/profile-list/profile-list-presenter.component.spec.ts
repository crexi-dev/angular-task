import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { ProfileListPresenterComponent } from './profile-list-presenter.component';

describe('ProfileListPresenterComponent', () => {

    let component: ProfileListPresenterComponent;
    let fixture: ComponentFixture<ProfileListPresenterComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileListPresenterComponent
            ],
            imports: [
                MatTableModule
            ]
        })
        .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
