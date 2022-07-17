import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@core/layout/layout.module';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    exports: [
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        LayoutModule
    ]
})
export class ProfileListModule {
}
