// import { LayoutModule } from '@core/layout/layout.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockModule } from 'ng-mocks';

import { ProfileListComponent } from './profile-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListComponent],
            imports: [
                RouterTestingModule,
                MockModule(CommonModule),
                MockModule(MatFormFieldModule),
                MockModule(MatListModule),
                MockModule(MatIconModule),
                MockModule(MatTableModule),
                MockModule(MatButtonModule),
                MockModule(MatPaginatorModule),
                MockModule(MatSelectModule),
                MockModule(ReactiveFormsModule)
            ],
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
