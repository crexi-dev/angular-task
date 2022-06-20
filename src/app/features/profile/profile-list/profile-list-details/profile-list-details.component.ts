import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { getLoading, getUsersById } from '@store/selectors';
import { Observable, Subject } from 'rxjs';
import { filter, first, takeUntil } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list-details',
    styleUrls: ['./profile-list-details.component.scss'],
    templateUrl: './profile-list-details.component.html'
})
export class ProfileListDetailsComponent implements OnInit, OnDestroy  {

    public user$: Observable<UserProfile>;
    private userProfileId: string;
    private onDestroy$ = new Subject<void>();

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private store: Store) {
        
        // fetch profileId from the router params and assign it to local variable
        this.userProfileId = this.activatedRoute.snapshot.paramMap.get('profileId');
    
    }

    ngOnInit (): void {

        // get user profile data from selector 
        this.user$ = this.store.select(getUsersById(this.userProfileId));

        // validate and see if any data exist for the selected user id 
        // if no match exist the redirect to random user profile data page
        this.store.select(getLoading)
        .pipe(
            filter((isLoading) => !isLoading),
            takeUntil(this.onDestroy$)
        ).subscribe(() => {

            this.user$.pipe(first()).
            subscribe((user) => {

                if(!user) {

                    this.router.navigate(['profile']);
                
                }
                    
            });
            
        });
    
    }

    // redirect back to profile list page 
    goToProfileList () {

        this.router.navigate(['profile-list']);
    
    }

    // destroy all the subscription 
    ngOnDestroy (): void {

        this.onDestroy$.next();
    
    }

}
