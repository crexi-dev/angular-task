import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private store: Store<AppState>,
        private route: ActivatedRoute,
        private profileService: ProfileService
    ) {}

    ngOnInit () {
        const routeParams = this.route.snapshot.paramMap;
        const id: string = routeParams.get('id');
        let user: UserProfile;
        if (id !== '') {
            this.store.dispatch(profileActions.loadProfileById({id}));
        } else {
            this.profileService
                .getRandomUsers()
                .subscribe(
                    users => this.store.dispatch(profileActions.loadProfile({user: users[0]})));

        }
    }

}
