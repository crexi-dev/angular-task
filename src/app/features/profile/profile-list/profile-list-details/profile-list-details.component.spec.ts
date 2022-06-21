import { MatButtonModule } from '@angular/material/button';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { provideMockStore } from '@ngrx/store/testing';

import { ProfileListDetailsComponent } from './profile-list-details.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileListDetailsComponent', () => {

    let component: ProfileListDetailsComponent;
    let fixture: ComponentFixture<ProfileListDetailsComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListDetailsComponent],
            imports: [
                MockModule(MatCardModule),
                MockModule(MatListModule),
                MockModule(MatButtonModule),
                RouterTestingModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: { paramMap: convertToParamMap({
                            id: 'test'
                        }) }
                    }
                },
                provideMockStore()
            ]
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
