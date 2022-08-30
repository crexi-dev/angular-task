
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// ngrx store
import { AppStoreModule } from '@store/store.module';
import { LayoutModule } from './layout/layout.module';
import { moduleImportGuard } from './module-import-guard';
import { RoutingModule } from './routing/routing.module';

@NgModule({
    declarations: [],
    exports: [
        RoutingModule
    ],
    imports: [
        AppStoreModule,
        CommonModule,
        HttpClientModule,
        LayoutModule,
        RoutingModule
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
