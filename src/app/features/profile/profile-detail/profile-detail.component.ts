import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { profileActions } from "@store/actions";
import { AppState } from "@store/reducers";
import { getSelectedUserProfile } from "@store/selectors";
import { take } from "rxjs/operators";

@Component({
    selector: "app-profile-detail",
    styleUrls: ["./profile-detail.component.less"],
    templateUrl: "./profile-detail.component.html",
})
export class ProfileDetailComponent implements OnInit {
    public user$ = this.store.select(getSelectedUserProfile);

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        // If no user is selected in state, initialize & pull a random profile 
        this.user$.pipe(take(1)).subscribe((selectedUser) => {
            if (!selectedUser) {
                this.store.dispatch(
                    profileActions.initProfiles({ numberOfResults: 1 })
                );
            }
        });
    }
}
