import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListDetailsComponent } from './profile-list-details.component';
import { ProfileListDetailsRoutingModule } from './profile-list-details-routing.module';

@NgModule({
    declarations: [
        ProfileListDetailsComponent
    ],
    imports: [
        CommonModule,
        ProfileListDetailsRoutingModule
    ]
})
export class ProfileListDetailsModule { }
