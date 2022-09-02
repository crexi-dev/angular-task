import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
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
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forRoot([ProfileEffects])
    ]
})
export class ProfileModule { }
