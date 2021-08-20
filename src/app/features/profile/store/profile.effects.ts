import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadProfile } from "@store/actions";
import { map, mergeMap } from "rxjs/operators";
import { ProfileService } from "src/app/services/profile.service";
import { UserProfile } from "../interfaces";
import { loadProfileSuccess } from "@store/actions";
// import { ProfileState } from '../interfaces/profile-state';

@Injectable() export class ProfileEffects {
    
    
    constructor(private actions$: Actions, private profileService: ProfileService){


        

                                
    }


    // loadProfile$ = createEffect (() => {
    //     return this.actions$.pipe(
    //         ofType(loadProfile), 
    //         mergeMap((action) => {
    //             return this.profileService.getProfile().pipe(
    //                 map((data) => {
    //                     console.log("data in effects", data);
                        
    //             })
    //             );
    //         })
    //         );
    // }, 
    // {dispatch: false}
    // );



    


        loadProfile$ = createEffect (() => {
                return this.actions$.pipe(
                    ofType(loadProfile), 
                    mergeMap((action) => {
                        return this.profileService.getProfile().pipe(
                            map(( data ) => {
                                 

                                
                                
                                for(let key in data){
                                    // console.log("data in effects", data[key].user);
                                    let profileState: UserProfile = data[key].user;

                                    let profile = { user: profileState};
                                    // console.log("dummyuser: ", dummyuser);
                                    return loadProfileSuccess( profile );
                                }


         
                                
                        })
                        );
                    })
                    );
            }, 
            );



}  