import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';
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
        LayoutModule,
        ProfileModule,
        TranslateModule
    ]
})
export class FeaturesModule { }
