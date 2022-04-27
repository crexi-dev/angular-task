import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private service: ProfileService,
        private store: Store<AppState>
    ) {}

    ngOnInit () {

        this.service
            .retrieve()
            .subscribe( user => this.store.dispatch( profileActions.initProfile({user}) ) )

    }

}
