import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfilesState } from '../interfaces';
import { profilesActions } from '../store/profiles.actions';

@Component({
	selector: 'crx-profiles-list',
	templateUrl: './profiles-list.component.html',
	styleUrls: ['./profiles-list.component.less']
})
export class ProfilesListComponent implements OnInit {

	constructor(private store: Store<ProfilesState>) { }

	ngOnInit(): void {
		this.store.dispatch(profilesActions.initProfiles());
		this.store.dispatch(profilesActions.getProfileList());
	}

}
