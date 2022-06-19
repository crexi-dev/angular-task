import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { getLoading, getUsersById } from '@store/selectors';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list-details',
    styleUrls: ['./profile-list-details.component.scss'],
    templateUrl: './profile-list-details.component.html'
})
export class ProfileListDetailsComponent implements OnInit  {

    private userProfileId: string;
    public user$: Observable<UserProfile>;

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private store: Store) {
 
        this.userProfileId = this.activatedRoute.snapshot.paramMap.get('profileId');
    
    }

    ngOnInit (): void {

        this.user$ = this.store.select(getUsersById(this.userProfileId));

        this.store.select(getLoading).pipe(filter((isLoading) => !isLoading)).subscribe((isLoading) => {

            this.user$.pipe(first()).
            subscribe((user) => {

                if(!user) {

                    this.router.navigate(['profile']);
                
                }
                    
            });
            
        });
    
    }

    goToProfileList () {

        this.router.navigate(['profile-list']);
    
    }

}
