import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiUserProfile, ProfileQuery, SearchResponse} from "@api/types";

@Injectable({ providedIn: 'root' })
export class ProfileService {

    baseUrl = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) {
    }

    getProfiles({page, limit}: ProfileQuery) {
        let params = new HttpParams();

        params = params.set('page', page);
        params = params.set('results', limit);

        return this.http.get<SearchResponse<ApiUserProfile>>(this.baseUrl, {params});
    }
}
