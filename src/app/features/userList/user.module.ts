import { NgModule } from '@angular/core';
import { UserListComponent } from '@features/userList/user-list.component';

@NgModule({
    declarations: [
        UserListComponent
    ],
    exports: [UserListComponent
    ],
    imports: [

    ]
})
export class UserModule { }
