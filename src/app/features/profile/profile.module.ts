import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@core/layout/layout.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileListComponent } from './profile-list';
import { ProfileEffects } from './store/profile.effects';
import { getProfileReducer } from './store/profile.reducers';

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
        EffectsModule.forFeature([ProfileEffects]),
        HttpClientModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        RouterModule,
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule { }
