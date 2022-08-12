import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor (private http: HttpClient) {}
    getUserList () {
        return this.http.get('https://randomuser.me/api/');

}

}
