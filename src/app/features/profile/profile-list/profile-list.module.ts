import { LayoutModule } from '@core/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileListRoutingModule } from './profile-list-routing.module';
import { ProfileListComponent } from './profile-list.component';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        ProfileListRoutingModule
    ]
})
export class ProfileListModule { }
