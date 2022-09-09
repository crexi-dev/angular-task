import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';

import { ProfileCardModule } from 'src/app/shared/profile/profile-card/profile-card.module';
import { getProfileReducer } from 'src/app/shared/profile/store/profile.reducers';

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
        MatCardModule,
        MatDividerModule,
        MatListModule,
        ProfileCardModule,
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule { }
