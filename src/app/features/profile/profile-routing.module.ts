import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const routes: Routes = [
    {
        component: ProfileDetailComponent,
        data: { title: 'user profile' },
        path: 'user/:id'
    },
    {
        component: ProfileListComponent,
        data: { name: 'profiles' },
        path: '',
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
