import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
      RouterModule.forRoot(appRoutes, {
        enableTracing: false,
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
        relativeLinkResolution: 'legacy'
      }),
      StoreModule.forRoot({router: routerReducer}),
      StoreRouterConnectingModule.forRoot(),
    ]
})
export class RoutingModule {}
