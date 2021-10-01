import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileSheetComponent } from '@features/profile/profile-sheet/profile-sheet.component';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileSheetComponent
    ],
    entryComponents: [
        ProfileDetailComponent,
        ProfileSheetComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileSheetComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule { }
