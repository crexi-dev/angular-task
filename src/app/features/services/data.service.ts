import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http : HttpClient){}

    getProfile(){
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        const options = {headers};
        return this.http.get('https://randomuser.me/api/', options).pipe(
          map((response: any) => ({
            cellNumber: response.results[0].cell,
            city: response.results[0].location.city,
            dateOfBirth: new Date(response.results[0].dob.date).toDateString(),
            email: response.results[0].email,
            firstName: response.results[0].name.first,
            lastName: response.results[0].name.last,
            phoneNumber: response.results[0].phone,
            picture: response.results[0].picture.medium,
            state: response.results[0].location.state
          })),
          catchError(err => {
            return err
          })
      );
    }

    getProfileList(){
      const headers = new HttpHeaders({'Content-Type' : 'application/json'});
      const options = {headers};
      return this.http.get('https://randomuser.me/api/?page=3&results=10', options).pipe(
        map((response: any) => response),
        catchError(err => {
          return err
        })
    );
  }
}