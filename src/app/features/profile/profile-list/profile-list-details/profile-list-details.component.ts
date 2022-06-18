import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-list-details',
    styleUrls: ['./profile-list-details.component.scss'],
    templateUrl: './profile-list-details.component.html'
})
export class ProfileListDetailsComponent  {

    constructor () { }

}
