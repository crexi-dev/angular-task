import { LayoutModule as AngularLayoutModule } from '@angular/cdk/layout';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppStoreModule } from '@store/store.module';
import { LayoutModule } from './layout/layout.module';
import { moduleImportGuard } from './module-import-guard';
import { RoutingModule } from './routing/routing.module';
import { UserDisplayNameModule } from './pipes/user-display-name/user-display-name.module';

@NgModule({
    declarations: [],
    exports: [
        RoutingModule,
        UserDisplayNameModule
    ],
    imports: [
        AngularLayoutModule,
        AppStoreModule,
        CommonModule,
        HttpClientJsonpModule,
        HttpClientModule,
        LayoutModule,
        RoutingModule,
        UserDisplayNameModule
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: 'Window', useValue: window }
    ]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

        moduleImportGuard(parentModule, 'CoreModule');

    }

}
