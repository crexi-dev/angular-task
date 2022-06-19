import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private router: Router) {}

    ngOnInit () {

        this.store.dispatch(profileActions.loadUserProfile());

    }
    
    loadNewUser () {

        this.store.dispatch(profileActions.loadUserProfile());
        
    }

    goProfileList () {

        this.router.navigate(['profile-list']);
    
    }

    ngOnDestroy (): void {

        this.store.dispatch(profileActions.resetUserProfile());
    
    }

}
