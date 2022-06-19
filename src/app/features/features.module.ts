import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,    
        LayoutModule,
        RouterModule,
        ProfileModule
    ]
})
export class FeaturesModule { }
