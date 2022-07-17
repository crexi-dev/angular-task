import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    exports: [
        ProfileListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProfileListModule {
}
