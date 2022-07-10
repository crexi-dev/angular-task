import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { RoutingService } from '@core/routing';

function initializeRoutingStateHooks (routingService: RoutingService) {

    return () => routingService.init();

}

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
    ],
    providers: [{
        deps: [RoutingService],
        multi: true,
        provide: APP_INITIALIZER,
        useFactory: initializeRoutingStateHooks
    }]

})
export class AppModule { }
