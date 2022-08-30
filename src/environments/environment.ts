// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export class DevEnv {


  production = false
  endpoints = {
    getRandomUser:"https://randomuser.me/api/",
    listRandomUsers:"https://randomuser.me/api/?results=",
    getLocationCoords:(location:string)=>{

      let encodedLocation = encodeURIComponent(location)
      // I know after the assessment I'll change the api key
      return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocation}.json?access_token=pk.eyJ1IjoibWljaGFlbG9kdW1vc3U1NyIsImEiOiJjajB5Nzl6ODMwMmVlMzJwZXVqdmtlbGs1In0.YWZAMCT9m7su01RofBiQmQ`
    }
  }

  readonly profileList={
    amntOfUsersLimit:10,
    amountOfUsersToList:2,
    amntOfPixelsFromBottomBeforeRetrievingData:5
  }
  threeJSBackground ={
    planetEarthRadians:10,
    cameraProfilesPosition:{
      x:0,y:0,z:13
    },
    cameraProfilePosition:{
      x:-12.5,y:0,z:8
    }
  }
  nav ={
    profilesPage:"/profiles",
    profilePage:"/profile"
  }
}
export const env = new DevEnv()

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
