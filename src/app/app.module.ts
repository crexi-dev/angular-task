import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ProfileEffects } from './shared/profile/store/profile.effects';

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
        EffectsModule.forRoot([ProfileEffects])
    ]
})
export class AppModule { }
