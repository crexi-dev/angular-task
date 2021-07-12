import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';





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
        HttpClientModule,
        FeaturesModule
    ]
})
export class AppModule { }
