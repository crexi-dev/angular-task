import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfileListComponent } from '@features/profile/profile-list/profile-list.component';
import { ProfileDetailsGuard } from './guards/profile-details.guard';
import { ProfilesGuard } from './guards/profiles.guard';

export const appRoutes: Routes = [
    {
        component: ProfileListComponent,
        data: { name: 'profileList' },
        canActivate: [ProfilesGuard],
        path: 'profiles'
    },
    {
        component: ProfileDetailComponent,
        canActivate: [ProfilesGuard],
        path: 'profiles/profile',
        children: [
            {
                component: ProfileDetailComponent,
                canActivate: [ProfileDetailsGuard],
                path: ':id'
            }
        ]
    },
    {
        path: '404',
        component: PageNotFoundComponent,
        data: { name: 'pageNotFound' }
    },
    {
        path: '',
        component: HomePageComponent,
        data: { name: 'homePage' }
    },
    {
        path: '**',
        data: { name: 'pageNotFound' },
        redirectTo: '/404'
    }
];
