import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserDetailsById } from '@store/selectors';
import { Observable } from 'rxjs';
import { IUserProfile } from '../interfaces';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    userDetails$: Observable<IUserProfile>;

    constructor (private store: Store<AppState>) {}

    ngOnInit () {

        // selecting the details by Id from /profiles/profile/:id route
        this.userDetails$ = this.store.select(getUserDetailsById);

    }

}
