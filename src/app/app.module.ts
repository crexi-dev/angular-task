import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { ProfileSheetComponent } from './features/profile/profile-sheet/profile-sheet.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ProfileSheetComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule
    ]
})
export class AppModule { }
