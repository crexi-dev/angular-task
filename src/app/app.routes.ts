import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';

export const appRoutes: Routes = [
    {
        data: { name: 'ProfileList' },
        loadChildren: () => import('src/app/features/profile/profile-list/profile-list.module')
        .then((m) => m.ProfileListModule),
        path: 'profile-list'
    },
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile'
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
