import { Component, OnInit } from '@angular/core';
import { RoutingService } from '@core/routing';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private store: Store<AppState>, 
        private routingSvc: RoutingService
    ) {}

    ngOnInit () {
        const userId = this.routingSvc.getRouteParam('id')
        if (userId) {
            this.store.dispatch(profileActions.select({id: +userId}));
        } else {
            this.store.dispatch(profileActions.load());
        }
    }

    public gotoList() {
        this.routingSvc.toRoute(['profile-list']);
    }
}
