import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { ProfilesComponent } from '@features/profiles/profiles.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { getProfilesReducer } from '@features/profiles/store/profiles.reducers';

@NgModule({
    declarations: [
        HomePageComponent,
        ProfilesComponent
    ],
    exports: [
        HomePageComponent,
        ProfilesComponent
    ],
    imports: [
        LayoutModule,
        ProfileModule,
        RouterModule,
        CommonModule,
        StoreModule.forFeature('profiles', getProfilesReducer)
    ]
})
export class FeaturesModule {
}
