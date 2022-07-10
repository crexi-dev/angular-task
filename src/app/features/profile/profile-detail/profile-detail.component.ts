import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile, shouldLoadRandomUser } from '@store/selectors';
import { UserProfile } from '@interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnDestroy, OnInit {

    private onDestroy$: Subject<void> = new Subject<void>();

    user$: Observable<UserProfile> = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>) {}

    ngOnDestroy (): void {

        this.onDestroy$.next();
        this.onDestroy$.complete();

    }

    ngOnInit (): void {

        this.store.select(shouldLoadRandomUser).pipe(
            filter((shouldLoadRandomUser) => shouldLoadRandomUser),
            takeUntil(this.onDestroy$),
            tap(() => {

                this.store.dispatch(profileActions.initProfile());

            })
        ).subscribe();

    }

}
