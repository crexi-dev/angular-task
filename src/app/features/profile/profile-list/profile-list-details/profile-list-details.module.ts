import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListDetailsComponent } from './profile-list-details.component';
import { ProfileListDetailsRoutingModule } from './profile-list-details-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ProfileListDetailsComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        ProfileListDetailsRoutingModule
    ]
})
export class ProfileListDetailsModule { }
