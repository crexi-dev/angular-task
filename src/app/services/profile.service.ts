import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfileState } from '../features/profile/interfaces/profile-state'
import { map } from "rxjs/operators";


@Injectable({ providedIn: 'root'}) 


export class ProfileService{


    constructor(private http: HttpClient){

    }


    getProfile(): Observable<ProfileState[]>{
        return this.http
         .get<any>('https://randomuser.me/api/?inc=cell,location,dob,email,name,phone,picture')
         .pipe(map((data) => {
            const profileState: ProfileState[] = [];
                for(let key in data){
                    if(key === 'results'){
                       
                        for(let key2 in data[key]){
                          
                            profileState.push({ user:{ 
                                cellNumber: data[key][key2].cell, 
                                city: data[key][key2].location.city,
                                dateOfBirth: data[key][key2].dob.date,
                                email: data[key][key2].email,
                                firstName: data[key][key2].name.first,
                                lastName: data[key][key2].name.last,
                                phoneNumber: data[key][key2].phone,
                                picture: data[key][key2].picture.thumbnail,
                                state: data[key][key2].location.state,
                                visible: false 
                            }});

                        }
                    }
                   
                }
                
          
            // console.log('profilestate in service: ', profileState);
            return profileState;
        }));
    }



}