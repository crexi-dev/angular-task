import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IUsersTableConfig, UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import {  getUserProfileList } from '../store/profile.selectors';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit, OnDestroy  {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    // MatPaginator Inputs
    public paginatorLength = 1000; // hard coding this for the timebeing
    public pageSize = 10;
    public pageSizeOptions: number[] = [5, 10, 25, 100];
    public currentPage: number = 0;
    public tableConfig: IUsersTableConfig[] = [
        { key: 'firstName', value: 'First Name' },
        { key: 'lastName', value: 'Last Name' },
        { key: 'dateOfBirth', value: 'Date Of Birth' },
        { key: 'city', value: 'City' },
        { key: 'phoneNumber', value: 'Phone Number' }
    ];

    public displayedColumns = this.tableConfig.map((config) => config.key);

    public usersProfile$: Observable<UserProfile[]> = this.store.select(getUserProfileList);
    
    public sortByControl = new FormControl(null);
    public isProfileDetailsOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor (
        private store: Store, 
        private router: Router, 
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit (): void {

        if(location.href.includes('profile-details')) {

            this.isProfileDetailsOpen$.next(true);
        
        }

        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: this.currentPage,
                pageSize: this.pageSize
            }
        }));

        this.sortByControl.valueChanges.subscribe((config: IUsersTableConfig) => {

            this.store.dispatch(profileActions.sortUsers({ sortBy: config?.key, sortOrder: 'asc' }));
            
        });

        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
            map((e) => {

                if(e.urlAfterRedirects.includes('profile-details')) {

                    this.isProfileDetailsOpen$.next(true);
                
                } else {

                    this.isProfileDetailsOpen$.next(false);
                
                }
            
            })
        ).subscribe();

    }

    onPageChange (events: PageEvent) {

        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: events.pageIndex,
                pageSize: events.pageSize
            }
        }));

    }

    onRowClick (userProfile: UserProfile) {

        this.router.navigate(['profile-details', userProfile.id], { relativeTo: this.activatedRoute });

    }

    ngOnDestroy (): void {

        this.store.dispatch(profileActions.resetUsersList());
    
    }

}
