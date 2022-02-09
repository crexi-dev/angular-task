import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {Store} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";
import {GlobalService} from "../../services/global.service";
import {FetchedUser} from "../../models/FetchedUser.model";
import {ConverterUtil} from "../../utils/converter.utils";
import {User} from "../../models/User.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-profile-list',
    templateUrl: './user-profile-list.component.html',
    styleUrls: ['./user-profile-list.component.less']
})
export class UserProfileListComponent extends BaseComponent implements OnInit, OnDestroy {
    users: User[];

    constructor(
        private store: Store<IGlobalState>,
        private globalService: GlobalService,
        private router: Router
    ) {
        super(store);
    }

    ngOnInit(): void {
        this.registerUserSub();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    registerUserSub() {
        this.reg$(
            this.globalSelect.Api.GetUsers().subscribe((data: User[]) => {
                this.users = data;
            })
        );
    }

    navigateToProfileDetail(userId: string) {
        if (userId) {
            this.router.navigate([`/user-profile-detail/${userId}`]);
        } else {
            this.router.navigate(['/user-profile-detail']);
        }
    }
}
