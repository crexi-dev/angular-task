import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile, getUsers } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {}

    ngOnInit () {

        this.route.paramMap.subscribe((params) => {
            
            if (params.get('id')) {

                this.store.select(getUsers).subscribe((users) => {

                    if (!users || !users.length) {
                        
                        this.router.navigate(['/list']);

                    } else {

                        this.store.dispatch(profileActions.updateProfile({ name: params.get('id') }));

                    }

                });

            } else {

                this.store.dispatch(profileActions.initProfile());

            }

        });

    }

}
