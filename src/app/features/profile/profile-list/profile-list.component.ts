import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileActions } from '../store/profile.actions';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit { 

    user$ = this.store.select(profileActions.getTopUserDataSuccessResult);

    constructor (private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute) { 
        
    }

    ngOnInit (): void {

        this.store.dispatch(profileActions.getTopUserData());
    
    }

    navigateToUserDetails (id: string) {

        this.router.navigate(['/profile'], { queryParams: { id }, relativeTo: this.activatedRoute });
    
    }

}
