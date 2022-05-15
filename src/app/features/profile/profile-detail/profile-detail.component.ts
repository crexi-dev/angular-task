import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { ProfileService } from '@features/profile/profile.service';
import { AppState } from '@store/reducers';
import { getUserProfile, getUserProfiles } from '@store/selectors';
import { combineLatest, Subscription } from 'rxjs';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

	pagination = false;
	user$ = this.store.select(getUserProfile);
	users$ = this.store.select(getUserProfiles);
	combine$$: Subscription;
	users$$: Subscription;

	constructor (
		private store: Store<AppState>,
		private profileService: ProfileService,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.combine$$ = combineLatest([
			this.route.params,
			this.user$,
		]).subscribe(([{id}, user]) => {
			this.pagination = (id && id > 0 && id <= this.profileService.limit);
			if (id) {
				if (this.pagination) {
					this.users$$ = this.users$.subscribe((users) => {
						if (!users) {
							this.profileService
								.getRandomProfileList()
								.subscribe(
									(profiles) => {
										this.store.dispatch(profileActions.retrieveProfiles({ profiles }));
										this.store.dispatch(profileActions.initProfile({ profile: profiles[id-1] }));
									}
								);
						} else {
							this.store.dispatch(profileActions.initProfile({ profile: users[id-1] }));
						}
					});
				} else {
					this.router.navigate(['/profile']);
				}
			} else {
				if (!user) {
					this.getRandomUser();
				} else {
					this.store.dispatch(profileActions.initProfile({ profile: user }))
				}
			}
		});
	}

	getRandomUser(): void {
		this.profileService
			.getRandomProfile()
			.subscribe((profile) => this.store.dispatch(profileActions.initProfile({ profile })));
	}

	goBack(): void {
		this.router.navigate(['/profiles']);
	}

	ngOnDestroy(): void {
		this.combine$$.unsubscribe();
		if (this.users$$) {
			this.users$$.unsubscribe();
		}
	}

}
