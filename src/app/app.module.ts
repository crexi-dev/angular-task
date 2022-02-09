import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import {GlobalService} from "./services/global.service";
import { UserProfileListComponent } from './components/user-profile-list/user-profile-list.component';
import { UserProfileDetailComponent } from './components/user-profile-list/user-profile-detail/user-profile-detail.component';
import {MatCardModule} from "@angular/material/card";
import {LayoutModule} from "@core/layout/layout.module";
import {MatListModule} from "@angular/material/list";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        UserProfileListComponent,
        UserProfileDetailComponent
    ],
    providers: [
        GlobalService
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        MatCardModule,
        LayoutModule,
        MatListModule
    ]
})
export class AppModule { }
