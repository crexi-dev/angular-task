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

    // Get user profile data from selector 
    public user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private router: Router) {}

    ngOnInit () {

        // Dispatch an action to load the random users 
        this.store.dispatch(profileActions.loadUserProfile());

    }
    
    loadNewUser () {

        // Dispatch an action to load new random users
        this.store.dispatch(profileActions.loadUserProfile());
        
    }

    goProfileList () {

        // Redirect to profile list 
        this.router.navigate(['profile-list']);
    
    }

    ngOnDestroy (): void {

        // dispatch an action to clear the store when the page get destroyed 
        this.store.dispatch(profileActions.resetUserProfile());
    
    }

}
