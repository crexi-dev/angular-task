import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile, getUserProfileList } from '@store/selectors';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private route: ActivatedRoute,
        private service: ProfileService,
        private store: Store<AppState>
    ) {}

    ngOnInit () {

        this.route
            .params
            .subscribe( 
                ({id}) => {
                    if ( id ) {
                        this.store.select(getUserProfileList).subscribe( 
                            users => {
                                users && users.length > 0
                                ? this.store.dispatch( profileActions.initProfile({user: users[id-1] }) )
                                : this.getUser()
                            }
                        )
                    }
                    else {
                        this.getUser()
                    }
                }
            )

    }

    getUser() {

        this.service
            .retrieve()
            .subscribe( user => this.store.dispatch( profileActions.initProfile({user}) ) )
            
    }
    

}
