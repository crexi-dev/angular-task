import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    exports: [
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class ProfileListModule {
}
