import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { ProfileService } from '../profile.service';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';
import { Subscription } from 'rxjs';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit, OnDestroy {

	users$ = this.store.select(getUserProfiles);
	subscription: Subscription;

	constructor (
		private store: Store<AppState>,
		private profileService: ProfileService
	) {}

	ngOnInit (): void {
		this.subscription = this.users$.subscribe((res) => {
			if (!res) {
				this.randomize();
			}
		});
	}

	randomize(): void {
		this.profileService
			.getRandomProfileList()
			.subscribe((profiles) => this.store.dispatch(profileActions.retrieveProfiles({ profiles })));
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
