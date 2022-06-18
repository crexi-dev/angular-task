import { ProfileListComponent } from './profile-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ProfileListComponent,
        children: [
            {
                path: 'profile-details/:profileId',
                loadChildren: () => import('src/app/features/profile/profile-list/profile-list-details/profile-list-details.module')
                    .then((m) => m.ProfileListDetailsModule)
            }
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProfileListRoutingModule { }
