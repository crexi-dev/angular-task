// angular
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// profile
import { GetUserAPISuccessModel, UserProfile } from "@interfaces";

// rxjs
import { of } from "rxjs";
import { map, tap } from "rxjs/operators";

// misc
import { env } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class ProfileService {

  constructor(
    private http: HttpClient
  ) {

  }
  getUser = (raw: boolean = false) => {

    return this.http.get(
      env.endpoints.getRandomUser
    )
      .pipe(
        raw ? tap() : map(getUserSuccess)
      )
  }

  listUsersCounter=0
  listUsers = (raw: boolean = false) => {

    if(this.listUsersCounter === env.profileList.amntOfUsersLimit){
      return of([])
    }
    
    return this.http.get(
      env.endpoints.listRandomUsers+env.profileList.amountOfUsersToList
    )
      .pipe(
        tap(()=>{
          this.listUsersCounter+=env.profileList.amountOfUsersToList
        }),
        raw ? tap() : map(listUserSuccess(this.listUsersCounter))
      )
  }
}

// transformation functions
let getUserSuccess = (apiData: GetUserAPISuccessModel) => {

  let [randomUser] = apiData.results
  
  let uiData = new UserProfile({
    cellNumber: randomUser.cell,
    city: randomUser.location.city,
    dateOfBirth: randomUser.dob.date,
    email: randomUser.email,
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    phoneNumber: randomUser.phone,
    picture: randomUser.picture.medium,
    state: randomUser.location.state,
  })
  return uiData

}

let listUserSuccess =(currentUserAmnt:number)=> (apiData: GetUserAPISuccessModel) => {

  let uiData = apiData.results.map((apiUser,index0) => {
    let uiUser = getUserSuccess({ info: apiData.info, results: [apiUser] })
    uiUser.id = (currentUserAmnt - (env.profileList.amountOfUsersToList -index0)) + env.profileList.amountOfUsersToList
    return uiUser
  })
  return uiData

}