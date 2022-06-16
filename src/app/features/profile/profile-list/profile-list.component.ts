import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
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

    public displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'city', 'phoneNumber'];
    public usersProfile$: Observable<UserProfile[]> = this.store.select(getUserProfileList);

    constructor (private store: Store) { }

    ngOnInit (): void {

        this.store.dispatch(profileActions.loadUserProfileList({
            usersRequest: {
                page: this.currentPage,
                pageSize: this.pageSize
            }
        }));

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

    }

}
