import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';

import { getProfileReducer } from './store/profile.reducers';
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatTooltipModule,
        EffectsModule.forFeature([ProfileEffects]),
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule { }
