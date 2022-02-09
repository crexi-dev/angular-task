import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User.model";
import {BaseComponent} from "../../base.component";
import {Store} from "@ngrx/store";
import {IGlobalState} from "../../../models/store/global-state.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-user-profile-detail',
    templateUrl: './user-profile-detail.component.html',
    styleUrls: ['./user-profile-detail.component.less']
})
export class UserProfileDetailComponent extends BaseComponent implements OnInit {
    users: User[] = [];
    currentUser!: User;
    id: string = '';

    constructor(
        //@ts-ignore
        private store: Store<IGlobalState>,
        private route: ActivatedRoute,
    ) {
        super(store);
    }

    ngOnInit(): void {
        this.fetchIdFromUrl();
        this.fetchUsersFromStore();
    }

    fetchIdFromUrl() {
        this.reg$(
            this.route.params.subscribe((params: Params) => {
                if (params?.id) {
                    this.id = params.id;
                }
            })
        )
    }

    fetchUsersFromStore() {
        this.reg$(this.globalSelect.Api.GetUsers().subscribe((users: User[]) => {
                this.users = users;

                this.currentUser = this.findUser(this.users, this.id);
            })
        );
    }

    findUser(users: User[], id: string): User | null {
        if (id) {

            const filteredUser = this.users?.filter((user => user.id === id));
            if (filteredUser.length > 0) {
                return filteredUser[0];
            } else {
                return null;
            }
        } else {
            let idx = Math.floor(Math.random() * 10);
            if (idx < this.users?.length) {
                return this.users[idx];

            } else {
                return null;
            }
        }

    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
