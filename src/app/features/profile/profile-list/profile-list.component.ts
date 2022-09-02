import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfileList } from '@store/selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getProfileList);

    constructor (private store: Store<AppState>, private route: Router) { }

    ngOnInit () {

        this.store.dispatch(profileActions.fetchProfileList());

    }

    profileClicked (user: any) {

        const mappedUser = {
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: new Date(user.dob.date).toDateString(),
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state
        };
        this.store.dispatch(profileActions.loadedProfile({ user: mappedUser }));
        this.route.navigate([`./profile/${user.id.value}`]);
        
    }

}
