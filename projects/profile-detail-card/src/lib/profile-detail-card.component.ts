import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '@interfaces';

@Component({
  selector: 'lib-profile-detail-card',
  templateUrl:'./profile-detail-card.html',
  styleUrls:['./profile-detail-card.scss']
})
export class ProfileDetailCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('user') user:UserProfile
  @Input('index') index:number;
  
}

