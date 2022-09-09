import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-profile-card',
    styleUrls: ['./profile-card.component.scss'],
    templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent implements OnInit {
    @Input() user$: Observable<UserProfile>;

    constructor () {}

    ngOnInit () {}
}
