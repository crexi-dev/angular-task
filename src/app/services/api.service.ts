import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from "rxjs";

@Injectable()
export class ApiService {

    constructor (private http: HttpClient) { }
    getRandomUsers () {

        return this.http.get('https://randomuser.me/api');
    
    }

    getTenRandomUsers ():Observable<any> {

        return this.http.get('https://randomuser.me/api/?results=10');
    
    }

}
