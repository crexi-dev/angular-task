import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
	selector: 'crx-profile-detail',
	styleUrls: ['./profile-detail.component.less'],
	templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

	user$ = this.store.select(getUserProfile);

	constructor(private store: Store<AppState>, private route: ActivatedRoute) {	}

	ngOnInit() {
		const { profileId } = this.route.snapshot.params;
		this.store.dispatch(profileActions.initProfile());
		if (!profileId) this.store.dispatch(profileActions.getRandomProfile());
		else this.store.dispatch(profileActions.getProfile({ id: profileId }));
	}

}
