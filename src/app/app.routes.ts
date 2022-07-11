import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { UserListComponent } from '@features/profile/user-list/user-list.component';
import { ROUTE_NAMES } from '@core/routing';

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        data: { name: ROUTE_NAMES.randomProfileDetail },
        path: 'profile'
    },
    {
        component: ProfileDetailComponent,
        data: { name: ROUTE_NAMES.profileDetail },
        path: 'profile/:id'
    },
    {
        component: UserListComponent,
        data: { name: ROUTE_NAMES.userList },
        path: 'profiles'
    },
    {
        component: PageNotFoundComponent,
        data: { name: ROUTE_NAMES.pageNotFound },
        path: '404'
    },
    {
        component: HomePageComponent,
        data: { name: ROUTE_NAMES.homePage },
        path: ''
    },
    {
        data: { name: ROUTE_NAMES.pageNotFound },
        path: '**',
        redirectTo: '/404'
    }
];
