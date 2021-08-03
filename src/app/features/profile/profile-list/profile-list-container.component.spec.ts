import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { ProfileListContainerComponent } from './profile-list-container.component';

describe('ProfileListContainerComponent', () => {

    let component: ProfileListContainerComponent;
    let fixture: ComponentFixture<ProfileListContainerComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileListContainerComponent
            ],
            imports: [
                MatTableModule
            ]
        })
        .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
