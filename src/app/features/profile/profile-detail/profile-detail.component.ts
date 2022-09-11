import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(profileActions.getUserDataSuccessResult);

    constructor (private store: Store<AppState>) { }

    ngOnInit () {

        this.store.dispatch(profileActions.getUserData());

    }
    
}
