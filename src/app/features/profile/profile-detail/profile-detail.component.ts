import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private route: ActivatedRoute) {
 
    }

    ngOnInit () {
        this.route.paramMap.subscribe((params: ParamMap) => {
            let id = params.get('id');
            if(id) {

            } else {
                this.store.dispatch(profileActions.initProfile({loading: true}));
            }
        })

    }

}
