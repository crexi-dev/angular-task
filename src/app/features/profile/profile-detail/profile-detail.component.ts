import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = 'https://randomuser.me/api/';
    user: any = []

    constructor (private http: HttpClient,  private route: ActivatedRoute, private router: Router) {
        
        const id = this.route.snapshot.paramMap.get('id');
        if(id!=null){ 
            this.user = this.router.getCurrentNavigation().extras.state.data.user; 
        }
        else{
            this.getJSON().subscribe(data => {
                this.user = data.results[0]
            })
        }
       
    }
    public getJSON(): Observable<any> {
        return this.http.get(this.user$);
    }

    ngOnInit () {
    
    }

}
