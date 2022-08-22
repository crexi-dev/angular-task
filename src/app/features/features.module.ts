import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        LayoutModule,
        ProfileModule,
        RouterModule
    ]
})
export class FeaturesModule { }
