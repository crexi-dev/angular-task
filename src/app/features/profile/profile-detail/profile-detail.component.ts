import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { ProfileFacade } from '../store/profile.facade';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    public selectedUser$: Observable<UserProfile>;

    constructor (private profileFacade: ProfileFacade) {}

    public ngOnInit (): void {

        this.selectUser$();

    }

    private selectUser$ () {
        this.selectedUser$ = this.profileFacade.selectUser$();
    }

}
