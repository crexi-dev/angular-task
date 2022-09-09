import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
    declarations: [
      ProfileCardComponent
    ],
    exports: [
      ProfileCardComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
    ]
})
export class ProfileCardModule { }
