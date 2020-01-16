import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { FEATURE_NAME, reducers } from './interfaces/profile-state';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature(FEATURE_NAME, reducers),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule { }
