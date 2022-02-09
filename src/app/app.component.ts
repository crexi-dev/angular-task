import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from "./components/base.component";
import {IGlobalState} from "./models/store/global-state.model";
import {Store} from "@ngrx/store";
import {FetchedUser} from "./models/FetchedUser.model";
import {ConverterUtil} from "./utils/converter.utils";
import {GlobalService} from "./services/global.service";

@Component({
    selector: 'crx-root',
    styleUrls: ['./app.component.less'],
    templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
    constructor(
        //@ts-ignore
        private store: Store<IGlobalState>,
        private globalService: GlobalService
    ) {
        super(store);
        this.store = store;
    }

    ngOnInit() {
        this.fetchUsersAndUpdateStore()
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    fetchUsersAndUpdateStore() {
        this.reg$(this.globalService.GetUsers(10).subscribe((fetchedUsers: FetchedUser) => {
            this.updateStoreWithUsers(fetchedUsers);
        }));
    }

    updateStoreWithUsers(fetchedUser: FetchedUser) {
        this.reg$(this.globalCommands.Api.UpdateUsers(ConverterUtil.convertFetchedUserToUser(fetchedUser)));
    }
}
