import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { IUsersTableConfig, UserProfile } from '@interfaces';
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
    public paginatorLength = 1000; // hard coding this for the time being
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

    // get user profile list from selector 
    public usersProfile$: Observable<UserProfile[]> = this.store.select(getUserProfileList);
    
    // setup the form control for sort selection 
    public sortByControl = new FormControl(null);

    // flag to monitor the detail page is open or not
    public isProfileDetailsOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    // subject that helps to destroy all the subscription when we get out of this page 
    private onDestroy$ = new Subject<void>();

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

        // load profile list based on the paginator configuration 
        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: this.currentPage,
                pageSize: this.pageSize
            }
        }));

        // monitor the sort selection and dispatch the action to sort the data 
        this.sortByControl.valueChanges
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((config: IUsersTableConfig) => {

            this.store.dispatch(profileActions.sortUsers({ sortBy: config?.key, sortOrder: 'asc' }));
            
        });

        // Navigation logic to check if the page is on details view or the list view 
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
            map((e) => {

                if(e.urlAfterRedirects.includes('profile-details')) {

                    this.isProfileDetailsOpen$.next(true);
                
                } else {

                    this.isProfileDetailsOpen$.next(false);
                
                }
            
            }),
            takeUntil(this.onDestroy$)
        ).subscribe();

    }

    // dispatch an action to load more data with the paginator configuration 
    onPageChange (events: PageEvent) {

        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: events.pageIndex,
                pageSize: events.pageSize
            }
        }));

    }

    // redirect to profile details view upon clicking on table row
    onRowClick (userProfile: UserProfile) {

        this.router.navigate(['profile-details', userProfile.id], { relativeTo: this.activatedRoute });

    }

    // destroy subscription and reset all global store
    ngOnDestroy (): void {

        this.store.dispatch(profileActions.resetUsersList());
        this.onDestroy$.next();
    
    }

}
