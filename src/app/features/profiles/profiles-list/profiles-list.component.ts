import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfilesState } from '../interfaces';
import { profilesActions } from '../store/profiles.actions';
import { getProfiles } from '../store/profiles.selectors';

@Component({
	selector: 'crx-profiles-list',
	templateUrl: './profiles-list.component.html',
	styleUrls: ['./profiles-list.component.less']
})
export class ProfilesListComponent implements OnInit {

	users$ = this.store.select(getProfiles);

	constructor(private store: Store<ProfilesState>) { }

	ngOnInit(): void {
		this.store.dispatch(profilesActions.initProfiles());
		this.store.dispatch(profilesActions.getProfileList());
	}

}
