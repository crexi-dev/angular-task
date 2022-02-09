import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions/actions';
import { AppState } from '@store/reducers/reducers';
import { getUserProfile } from '@store/selectors/global.selectors';
import {BaseComponent} from "../../../components/base.component";
import {GlobalService} from "../../../services/global.service";
import {FetchedUser} from "../../../models/FetchedUser.model";
import {User} from "../../../models/User.model";
import {ConverterUtil} from "../../../utils/converter.utils";

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent extends BaseComponent implements OnInit {
    user!: User;

    constructor (
        private store: Store<AppState>,
        private globalService: GlobalService
    ) {
        super(store);
    }

    ngOnInit () {
        this.registerUserSub();
        this.fetchUserProfileAndUpdateStore();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    fetchUserProfileAndUpdateStore() {
        this.reg$(this.globalService.GetUsers().subscribe((fetchedUser: FetchedUser) => {
            this.updateStoreWithUser(fetchedUser);
        }));
    }

    updateStoreWithUser(fetchedUser: FetchedUser) {
        this.reg$(this.globalCommands.Api.UpdateUserProfile(ConverterUtil.convertFetchedUserToUser(fetchedUser)[0]));
    }

    registerUserSub() {
        this.reg$(
            this.globalSelect.Api.GetUserProfile().subscribe((data: User) => {
                this.user = data;
            })
        );
    }


}
