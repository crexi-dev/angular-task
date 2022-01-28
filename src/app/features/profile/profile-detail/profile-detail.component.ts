import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { UserService } from '../services/user.service';
import { RoutingService } from '@core/routing';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private userService: UserService,
        private store: Store<AppState>,
        private routingService: RoutingService
    ) {}

    ngOnInit () {
        var uidParam = this.routingService.getRouteParam('id');
        if (uidParam) {
            this.store.dispatch(profileActions.getProfile({ id: uidParam}));
        } else {
            // when no uidParam found, generate 1 random user and put in store
            this.userService.getUsers(1)
                .subscribe(result => {
                    this.store.dispatch(profileActions.loadProfile({ profile: result.pop() }))
                });
        }
    }

    goTo(route: string) {
        this.routingService.toRoute([route]);
    }

}
