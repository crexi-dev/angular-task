import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorNotificationComponent } from '@core/layout/snackbar/error-notification.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ErrorNotificationComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        MatButtonModule
    ]
})
export class AppModule { }
