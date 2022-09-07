import { Component, Input } from '@angular/core';
import { UserProfile } from '@interfaces';

@Component({
    selector: 'crx-user-card',
    styleUrls: ['./user-card.component.scss'],
    templateUrl: './user-card.component.html'
})
export class UserCardComponent {

    @Input() user!: UserProfile;

    constructor () { }

}
