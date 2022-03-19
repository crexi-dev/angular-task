import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfilesListComponent } from '@features/profiles/profiles-list/profiles-list.component';

export const appRoutes: Routes = [
	{
		component: ProfileDetailComponent,
		data: { name: 'profileDetail' },
		path: 'profile'
	},
	{
		component: ProfileDetailComponent,
		data: { name: 'profileDetail' },
		path: 'profile/:profileId'
	},
	{
		component: ProfilesListComponent,
		data: { name: 'profilesList' },
		path: 'profiles'
	},
	{
		component: PageNotFoundComponent,
		data: { name: 'pageNotFound' },
		path: '404'
	},
	{
		component: HomePageComponent,
		data: { name: 'homePage' },
		path: ''
	},
	{
		data: { name: 'pageNotFound' },
		path: '**',
		redirectTo: '/404'
	}
];
