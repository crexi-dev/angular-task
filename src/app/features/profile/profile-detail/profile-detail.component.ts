import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { getUserProfile } from '../store/profile.selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$: Observable<UserProfile>;

    constructor (private store: Store<AppState>, private route: ActivatedRoute) {}

    ngOnInit () {
        this.user$ = this.store.select(getUserProfile);       
        const id = this.route.snapshot.paramMap.get('id');        
        
        if (id) {
            this.store.dispatch(profileActions.setSelectedProfileById({ id }));
        }        
        else this.store.dispatch(profileActions.getRandomProfile()); 
    }
}
