import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {



    @Input() user$: UserProfile;
    

    ngOnInit () {
     
    }

}
