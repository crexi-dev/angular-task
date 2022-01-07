import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileListActions } from '../store/actions/profile.actions';
import { getUserProfiles } from '../store/selectors/profile.selectors';
import { RoutingService } from '@core/routing';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getUserProfiles);

    constructor(private store: Store<AppState>, private routingService: RoutingService) { }

    ngOnInit() {

        this.store.dispatch(profileListActions.load({ userCount: 10 }));

    }

    public userClick(id: number) {

        this.routingService.toRoute(['profile', id]);

    }

}
