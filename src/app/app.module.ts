import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './features/profile-list/profile-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ProfileListComponent,
        ProfileListComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        BrowserAnimationsModule,
        MatCardModule,
    ]
})
export class AppModule { }
