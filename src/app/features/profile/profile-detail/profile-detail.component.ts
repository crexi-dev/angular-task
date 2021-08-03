import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { selectUserProfile } from '@store/selectors';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    private selectedId = this.activatedRoute.snapshot.params.id;

    public user$ = this.store.select(selectUserProfile);

    private loadSelectedOrRandomProfile (selectedId: string): void {

        if (selectedId) {

            this.store.dispatch(profileActions.loadProfileWithId({ selectedUserId: this.selectedId }));

        } else {

            this.store.dispatch(profileActions.loadRandomProfile());

        }

    }

    constructor (private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

    ngOnInit () {

        this.loadSelectedOrRandomProfile(this.selectedId);

    }

}
