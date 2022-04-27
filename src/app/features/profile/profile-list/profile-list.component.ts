import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfileList } from '@store/selectors';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'crx-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getUserProfileList);

    constructor (
        private service: ProfileService,
        private store: Store<AppState>
    ) {}

    ngOnInit () {

        this.service
            .list()
            .subscribe( users => this.store.dispatch( profileActions.initProfileList({users}) ) )

    }

}
