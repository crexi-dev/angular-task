import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfileListComponent } from '@features/profile/profile-list/profile-list.component';
import { ProfileMainComponent } from '@features/profile/profile-main/profile-main.component';

// I want to setup lazy loading however I'll avoid for convention sake
export const appRoutes: Routes = [
  {
    component: ProfileMainComponent,
    path: 'profile',
    children: [
      {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: ':id'
      },
      {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: ''
      }
    ]
  },
  {
    component: ProfileMainComponent,
    path: 'profiles',
    children: [
      {
        component: ProfileListComponent,
        data: { name: 'profileList' },
        path: ''
      },
    ]
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
