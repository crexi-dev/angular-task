import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import {FEATURE_PROFILE_NAME} from "@features/profile/store/profile.selectors";
import {EffectsModule} from "@ngrx/effects";
import {ProfileEffects} from "@features/profile/store/profile.effects";
import {MatTableModule} from "@angular/material/table";

import { getProfileReducer } from './store/profile.reducers';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileListComponent } from "@features/profile/profile-list";

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent,
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileListComponent,
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        EffectsModule.forFeature([ProfileEffects]),
        StoreModule.forFeature(FEATURE_PROFILE_NAME, getProfileReducer),
        MatTableModule
    ]
})
export class ProfileModule { }
