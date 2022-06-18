import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListDetailsComponent } from './profile-list-details.component';

describe('ProfileListDetailsComponent', () => {

    let component: ProfileListDetailsComponent;
    let fixture: ComponentFixture<ProfileListDetailsComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListDetailsComponent]
        })
        .compileComponents();
    
    });

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    
    });

});
