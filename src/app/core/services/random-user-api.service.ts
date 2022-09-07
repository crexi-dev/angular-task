import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    RandomUserApiRequestParams,
    RandomUserApiResponse,
    RandomUserApiUserNationality
} from '@core/models/random-user-api.model';
import { Observable } from 'rxjs';
import { parseObjectIntoQueryParams } from '@core/utils/http.utils';
import { environment } from '../../../environments/environment';

const randomUserApiDefaultParams: RandomUserApiRequestParams = {
    nat: RandomUserApiUserNationality.US,
    results: 10,
    seed: environment.randomUserApi.seed
};

@Injectable({
    providedIn: 'root'
})
export class RandomUserApiService {

    constructor (private httpClient: HttpClient) { }

    getUsers (options: RandomUserApiRequestParams = randomUserApiDefaultParams): Observable<RandomUserApiResponse> {

        return this.httpClient.get<RandomUserApiResponse>(`${environment.randomUserApi.url}/?${parseObjectIntoQueryParams(options)}`);

    }

}
