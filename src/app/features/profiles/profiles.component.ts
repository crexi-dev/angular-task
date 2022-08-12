import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@features/profile/services/profile.service';
import { getProfilesState } from '@features/profiles/store/profiles.selectors';
import { Store } from '@ngrx/store';
import { profilesActions } from '@features/profiles/store/profiles.actions';

@Component({
    selector: 'crx-profiles',
    styleUrls: ['./profiles.component.scss'],
    templateUrl: 'profiles.component.html'
})
export class ProfilesComponent implements OnInit {

    profiles$ = this.store.select(getProfilesState);

    constructor (private store: Store, public profileService: ProfileService) {

        // this.profileService.getProfiles();

    }

    ngOnInit () {

        this.store.dispatch(profilesActions.getProfiles());

    }

}
