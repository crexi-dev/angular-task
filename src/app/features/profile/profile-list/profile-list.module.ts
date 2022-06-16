import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@core/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ProfileListRoutingModule } from './profile-list-routing.module';
import { ProfileListComponent } from './profile-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        ProfileListRoutingModule
    ]
})
export class ProfileListModule { }
