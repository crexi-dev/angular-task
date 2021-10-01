import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersSelectors } from '@features/profile/store/profile-sheet.selectors';
import { UserProfile } from '@interfaces';

@Component({
    selector: 'app-profile-sheet',
    templateUrl: './profile-sheet.component.html',
    styleUrls: ['./profile-sheet.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSheetComponent {
    users$: Observable<UserProfile[]>;

    constructor (private store$: Store){
        this.users$ = this.store$.select(UsersSelectors.selectUserList);
    }

}
