import { ProfileListComponent } from './profile-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        children: [
            // lazy load the profile details view 
            {
                loadChildren: () => 
                    import('src/app/features/profile/profile-list/profile-list-details/profile-list-details.module')
                    .then((m) => m.ProfileListDetailsModule),
                path: 'profile-details/:profileId'
            }
        ],
        component: ProfileListComponent,
        path: ''
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProfileListRoutingModule { }
