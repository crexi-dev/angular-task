import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileListComponent } from '@features/profile-list/profile-list.component';
import { ProfileDetailComponent } from '@features/profile/profile-detail';

export const appRoutes: Routes = [
    {
        component: ProfileListComponent,
        path: 'profile-list'
    },
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile/:id'
    },
    {
        path: 'profile',
        redirectTo: 'profile/',
        pathMatch: 'full'
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
