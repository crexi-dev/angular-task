import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import {UserProfileListComponent} from "./components/user-profile-list/user-profile-list.component";
import {UserProfileDetailComponent} from "./components/user-profile-list/user-profile-detail/user-profile-detail.component";

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        path: 'profile'
    },
    {
        component: UserProfileListComponent,
        path: 'user-profile-list'
    },
    {
        component: UserProfileDetailComponent,
        path: 'user-profile-detail/:id'
    },
    {
        component: UserProfileDetailComponent,
        path: 'user-profile-detail'
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
