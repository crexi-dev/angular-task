import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UrlsService} from "./urls.service";
import {Observable} from "rxjs";
import {FetchedUser} from "../models/FetchedUser.model";

@Injectable()
export class GlobalService {
    constructor(private http: HttpClient) {
    }

    GetUsers(userCount: number = 1): Observable<FetchedUser> {
        return this.http.get<FetchedUser>(UrlsService.GetMultiUsers(userCount));
    }
}
