import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { UserEffects } from '@features/profile/store/profile.effects';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';

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
        EffectsModule.forRoot([UserEffects, ApiService])
    ]
})
export class AppModule { }
