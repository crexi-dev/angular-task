import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
        
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule
    ]
})
export class AppModule { }
