import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfilesComponent } from '@features/profile/profiles/profiles.component';

export const appRoutes: Routes = [
    // {
    //     component: ProfileDetailComponent,
    //     data: { name: 'profileDetail' },
    //     path: 'profile'
    // },
    // {
    //     loadChildren: () => import('./features/profile/profile.module').then((p) => p.ProfileModule),
    //     path: 'profile'
    // },
    {
        component: ProfilesComponent,
        data: { name: 'profileSearch' },
        path: 'profile/search'
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
