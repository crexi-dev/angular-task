import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducer';
import { profilesFeatureKey } from './interfaces';
import { ProfileListModule } from './profile-list/profile-list.module';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile-effects.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,

        HttpClientModule,

        MatCardModule,
        MatDividerModule,
        MatListModule,
        ProfileListModule,
        StoreModule.forFeature(profilesFeatureKey, getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule {
}
