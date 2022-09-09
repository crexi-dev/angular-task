// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

// Components
import { ProfileDetailComponent } from './profile-detail';
import { ProfileListComponent } from './profile-list/profile-list.component';

// Modules
import { LayoutModule } from '@core/layout/layout.module';

// NGRX
import { EffectsModule } from '@ngrx/effects';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileEffects } from './store/profile.effects.';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
        
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
        MatButtonModule,
        RouterModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects]),
        MatProgressSpinnerModule
    ]
})
export class ProfileModule { }
