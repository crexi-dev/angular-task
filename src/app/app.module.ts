// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Modules
import { FeaturesModule } from '@features/features.module';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
