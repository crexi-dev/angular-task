import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import {getUserProfile} from '@store/selectors';
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private route: ActivatedRoute) {}

    ngOnInit () {
        this.route.queryParamMap.pipe(
            tap((params) => {
                const id = params.get('id');
                this.store.dispatch(profileActions.initProfile({id: id}));
            })
        ).subscribe(() => {})
    }

}
