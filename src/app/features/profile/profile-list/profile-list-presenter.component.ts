import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UserProfile } from '@interfaces';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-profile-list-presenter',
    styleUrls: ['./profile-list-presenter.component.less'],
    templateUrl: './profile-list-presenter.component.html'
})
export class ProfileListPresenterComponent {

    @Input() public userList: UserProfile[] = [];

    @Output() public emitOpenProfile = new EventEmitter<string>();

    public displayedColumns: string[] = [
        'lastName',
        'firstName',
        'email',
        'phoneNumber',
        'cellNumber',
        'dateOfBirth',
        'action'
    ];

}
