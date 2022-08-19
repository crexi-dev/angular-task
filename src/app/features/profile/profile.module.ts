import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@core/layout/layout.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileEffects } from './store/profile.effects';
import { getProfileReducer } from './store/profile.reducers';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ListComponent
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
        MatTableModule,
        RouterModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule { }
