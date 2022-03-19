import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { ProfilesModule } from './profiles/profiles.module';

@NgModule({
	declarations: [
		HomePageComponent
	],
	entryComponents: [
		HomePageComponent
	],
	exports: [
		HomePageComponent
	],
	imports: [
		LayoutModule,
		ProfileModule,
		ProfilesModule
	]
})
export class FeaturesModule { }
