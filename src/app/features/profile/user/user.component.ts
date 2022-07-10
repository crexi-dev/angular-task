import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profileActions } from '@features/profile/store/profile.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { UserProfile } from '@interfaces';
import { getUser } from '@features/profile/store/profile.selectors';

@Component({
    selector: 'crx-user',
    styleUrls: ['./user.component.scss'],
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    user$: Observable<UserProfile> = this.store.select(getUser);

    constructor (private route: ActivatedRoute, private store: Store<AppState>) {}

    ngOnInit (): void {

        this.store.dispatch(profileActions.selectUser({ id: this.route.snapshot.params.id }));

    }

}
