import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '@features/profile/profile.service';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$: Observable<UserProfile>;
    showMissingProfileNotice = false;

    constructor (private _activatedRoute: ActivatedRoute, private _profileService: ProfileService) {}

    ngOnInit () {

        this.#getProfileData();

    }

    /**
     * Retrieve profile data.
     * If the `id` is not recognized then show an error notification.
     * @private
     */
    #getProfileData () {

        const id = this._activatedRoute.snapshot.paramMap.get('id') || null;
        this.user$ = this._profileService.getProfile$(id).pipe(map((result) => {

            if (result === false) {

                this.showMissingProfileNotice = true;
                return {} as UserProfile;

            } else {

                return result as UserProfile;

            }

        }));

    }

}
