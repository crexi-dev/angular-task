import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileService } from '@features/profile/profile.service';
import { UserProfile } from '@interfaces';
import { Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent {

    users$ = this._profileService.profiles$;

    skeletonEntries = new Array(10).fill(0);

    constructor (private _profileService: ProfileService, private _router: Router) {}

    goToProfile = (id: UserProfile['id']) => this._router.navigate(['/profile', id]);

}
