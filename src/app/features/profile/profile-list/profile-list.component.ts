import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUsersTableConfig, UserProfile } from '../interfaces';
import { profileActions } from '../store/profile.actions';
import {  getUserProfileList } from '../store/profile.selectors';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit  {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    // MatPaginator Inputs
    paginatorLength = 1000; // hard coding this for the timebeing
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    currentPage: number = 0;
    public tableConfig: IUsersTableConfig[] = [
        { key: 'firstName', value: 'First Name' },
        { key: 'lastName', value: 'Last Name' },
        { key: 'dateOfBirth', value: 'Date Of Birth' },
        { key: 'city', value: 'City' },
        { key: 'phoneNumber', value: 'Phone Number' }
    ];

    public displayedColumns = this.tableConfig.map((config) => config.key);

    public usersProfile$: Observable<UserProfile[]> = this.store.select(getUserProfileList);
    
    sortByControl = new FormControl(null);

    constructor (private store: Store, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit (): void {

        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: this.currentPage,
                pageSize: this.pageSize
            }
        }));

        this.sortByControl.valueChanges.subscribe((config: IUsersTableConfig) => {

            console.log(config);
            this.store.dispatch(profileActions.sortUsers({ sortBy: config?.key, sortOrder: 'asc' }));
            
        });

    }

    onPageChange (events: PageEvent) {

        console.log(events);
        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: events.pageIndex,
                pageSize: events.pageSize
            }
        }));

    }

    onRowClick (userProfile: UserProfile) {

        // TODO - enhance navigation
        console.log(userProfile);
        this.router.navigate(['profile-details'], { relativeTo: this.activatedRoute });

    }

}
