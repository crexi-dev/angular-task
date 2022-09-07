import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { profileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatGridListModule,
        MatListModule,
        StoreModule.forFeature('profile', profileReducer)
    ]
})
export class ProfileModule { }
