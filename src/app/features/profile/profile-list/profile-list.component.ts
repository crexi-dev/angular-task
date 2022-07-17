import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserProfile } from '@interfaces';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectAllProfiles } from '@features/profile/store/profile.selectors';
import { takeUntil } from 'rxjs/operators';
import { routingActions } from '@core/routing/store/routing.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit, OnDestroy {

    private onDestroy$: Subject<boolean> = new Subject();

    dataSource: UserProfile[] = [];
    displayedColumns = ['firstName', 'lastName', 'email', 'phoneNumber', 'action'];

    constructor (private store: Store, private cd: ChangeDetectorRef) {
    }

    ngOnInit (): void {

        this.store.pipe(
            select(selectAllProfiles),
            takeUntil(this.onDestroy$)
        ).subscribe((profiles: UserProfile[]) => {

            this.dataSource = [...profiles];
            this.cd.detectChanges();

        });

    }

    selectProfile (profile: UserProfile) {

        this.store.dispatch(routingActions.go({ url: `profile/${profile.username}` }));

    }

    ngOnDestroy () {

        this.onDestroy$.next(true);

    }

}
