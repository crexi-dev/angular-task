import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-profile',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.less']
})
export class AllProfileComponent implements OnInit {

  user$ = 'https://randomuser.me/api/?results=10';
  user: any = [];
  filterData = ''
  cardData = {

  }
  constructor(private http: HttpClient, private router: Router) {
    this.getJSON().subscribe(data => {
      console.log(data)
      this.user = data.results
    })
  }

  navigate(user: any) {
    this.router.navigate([`/profile/${user.login.username}`],  { state: { data: { user } } })

  }

  public getJSON(): Observable<any> {
    return this.http.get(this.user$);
  }

  ngOnInit() {
    this.getJSON();
  }

}
