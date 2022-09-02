import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { ProfileEffects } from '@features/profile/store/profile.effects';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        FeaturesModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [ProfileEffects]
})
export class AppModule { }
