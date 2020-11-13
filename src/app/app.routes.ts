import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
// import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfileListComponent } from '@features/profile/profile-list/profile-list.component';

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile'
    },
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile/:id'
    },
    {
        component: ProfileListComponent,
        data: { name: 'profileList' },
        path: ''
    },
    {
        component: PageNotFoundComponent,
        data: { name: 'pageNotFound' },
        path: '404'
    },
    // {
    //     component: HomePageComponent,
    //     data: { name: 'profileList' },
    //     path: ''
    // },
    {
        data: { name: 'pageNotFound' },
        path: '**',
        redirectTo: '/404'
    }
];
