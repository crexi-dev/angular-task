import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileFacade } from '../store/profile.facade';
import { RoutingFacade } from '@core/routing/store/routing.facade';
import { GoPayload, UserProfile } from '@interfaces';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    public loading$: Observable<boolean>;
    public users$: Observable<UserProfile[]>;

    constructor (
        private profileFacade: ProfileFacade,
        private routerFacade: RoutingFacade
    ) {}

    public ngOnInit (): void {

        this.profileFacade.loadUsers();
        this.selectUsers$();
        this.selectLoading$();

    }

    public onViewProfile(profile: UserProfile): void {
        const goPayload: GoPayload = {
            path: [`profiles/user/${profile.login.username}`]
        };

        this.profileFacade.viewUserProfile(profile);
        this.routerFacade.go(goPayload);
    }

    private selectLoading$(): void {

        this.loading$ = this.profileFacade.selectLoading$();

    }

    private selectUsers$(): void {

        this.users$ = this.profileFacade.selectUsers$();

    }

}
