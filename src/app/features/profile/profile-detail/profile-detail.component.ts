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

    constructor(
        private store: Store<AppState>,
        private routingService: RoutingService
    ) { }

    ngOnInit() {

        this._getProfileDetails();

    }

    private _getProfileDetails(): void {

        const userId = this.routingService.getRouteParam('id');
        let action = userId ? profileActions.select({ id: +userId }) : profileActions.load();

        this.store.dispatch(action);

    }

    public gotoList() {
        this.routingService.toRoute(['profile-list']);
    }
}
