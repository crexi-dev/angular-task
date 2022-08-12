import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import {UserModule} from '@features/userList/user.module';

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
        UserModule
    ]
})
export class FeaturesModule { }
