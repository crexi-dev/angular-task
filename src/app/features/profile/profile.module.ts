import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserDisplayNameModule } from '@core/pipes/user-display-name/user-display-name.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListService } from './profile-list/profile-list.service';
import { ProfileDetailService } from './profile-detail/profile-detail.service';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileListComponent,
        ProfileDetailComponent
    ],
    exports: [
        ProfileListComponent,
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatButtonModule,
        MatTooltipModule,
        UserDisplayNameModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ],
    providers: [
        ProfileListService,
        ProfileDetailService
    ]
})
export class ProfileModule { }
