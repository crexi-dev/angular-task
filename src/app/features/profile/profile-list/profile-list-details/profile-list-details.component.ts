import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { getUsersById } from '@store/selectors';
import { Observable } from 'rxjs';

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
    
    }

    goToProfileList () {

        this.router.navigate(['profile-list']);
    
    }

}
