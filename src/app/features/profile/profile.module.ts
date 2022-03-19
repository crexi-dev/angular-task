import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { ProfileEffects } from './store/profile.effects';
import { getProfileReducer } from './store/profile.reducers';

@NgModule({
	declarations: [
		ProfileDetailComponent
	],
	entryComponents: [
		ProfileDetailComponent
	],
	exports: [
		ProfileDetailComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		MatSnackBarModule,
		StoreModule.forFeature('profile', getProfileReducer),
		EffectsModule.forFeature([ProfileEffects])
	]
})
export class ProfileModule { }
