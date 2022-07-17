import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@core/layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
        LayoutModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class ProfileListModule {
}
