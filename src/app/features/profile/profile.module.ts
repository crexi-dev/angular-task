import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '@features/profile/store/profile.effects';
import { UserListComponent } from './user-list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        UserListComponent
    ],
    exports: [
        ProfileDetailComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects]),
        MatGridListModule,
        MatButtonModule
    ]
})
export class ProfileModule { }
