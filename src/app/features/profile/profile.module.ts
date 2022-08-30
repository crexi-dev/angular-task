// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// miss
import { LayoutModule } from '@core/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { getProfileReducer } from './store/profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';

// i18n
import { TranslateModule } from '@ngx-translate/core';

// profile components
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileDetailCardModule } from 'projects/profile-detail-card/src/public-api';


@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent,
        ProfileMainComponent,

    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        ProfileDetailCardModule,
        HttpClientModule,
        TranslateModule,
        RouterModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule { }
