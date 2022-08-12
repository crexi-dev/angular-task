import {Component} from '@angular/core';
import {UserService} from "@features/userList/user.service";
import {map} from "rxjs/operators";


@Component({
    selector: 'crx-user-list',
    styleUrls: ['./user-list.component.scss'],
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    public userList;

    public users$: any;
    constructor (private userService: UserService) {
        this.userList = userService.getUserList().pipe(map((value)=> this.users$ = value));

}

}
