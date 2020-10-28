import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent,
        ProfilesComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfilesComponent,
        ProfilesComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule { }
