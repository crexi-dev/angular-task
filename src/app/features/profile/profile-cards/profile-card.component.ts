import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserProfile } from '@interfaces';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-card',
    styleUrls: ['./profile-card.component.scss'],
    templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent {

    @Input() user: UserProfile;

}
