import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getProfilesReducer } from './store/profiles.reducers';
import { ProfilesEffects } from './store/profiles.effects';


@NgModule({
	declarations: [
		ProfilesListComponent
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('profiles', getProfilesReducer),
		EffectsModule.forFeature([ProfilesEffects])

	]
})
export class ProfilesModule { }
