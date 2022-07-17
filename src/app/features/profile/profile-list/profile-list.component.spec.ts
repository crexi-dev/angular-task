import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileListComponent } from './profile-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { LayoutModule } from '@core/layout/layout.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule } from '@angular/material/table';

describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProfileListComponent],
            imports: [LayoutModule, MatTableModule, RouterTestingModule],
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
