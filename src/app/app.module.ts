// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';


import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';


// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ThreejsBackgroundComponent } from '@core/layout/threejs-background/threejs-background.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,'content/i18n/');
  }


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ThreejsBackgroundComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })        
        
        
    ]
})
export class AppModule { }
