import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
// import { getUserProfile } from '@store/selectors';
import { ProfileService } from '../store/profile.service';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

	profile: any;
	user$: any;

    // user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private profileService:ProfileService) {}

    ngOnInit () {

        this.store.dispatch(profileActions.initProfile());

		this.profileService.getUser().subscribe((user:any)=>{		
			this.profile=user.results[0];
			this.user$=user.results[0];
			console.log(user);
		},
		(err)=>{
			console.log(err.status,"Error while fetching data...")
		},
		
		)

    }

}


