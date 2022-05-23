import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailComponent {

    user$ = this.store.select(getUserProfile);

    constructor (
      private store: Store<AppState>,
    ) {}

}
