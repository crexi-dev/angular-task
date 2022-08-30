[![CircleCI](https://circleci.com/gh/WindMillCode/WindMillCodeSite.svg?style=svg)](<LINK>)


# Summary

## Projects

## TODO
* must have mapbox API service on the backend

## General Description

## Features include 
Only members of the project can read the README.md from the ignore folder

## Issues
* Figure out why on zoom in does waterpipe.js not resize the canvas properly the view should be true to the screen

# Aspects

## Challenges
* Getting the global to offset to the right on the profile detail pane
* getting the point of the users location to face the camera
* Implementing server side pagination


## Enjoyed
* learning about host-context as a neat logic for managing overlayLoading and seeing how the crexi team managed overlayLoading
* how they setup there scss library and theme I am going to take with me throughout my career
* Looking at other submissions and making optimizations

## Leadership

## Done Different
* made product-detail-card lib from the beginning 




# Resources
* [Rotate to loaction on planet three js](https://www.youtube.com/watch?v=2pUzJOfekVE)
* [Encode URI Component](https://stackoverflow.com/a/332888)
* [Geocoding, retreiving lat,lng based on address](https://developers.google.com/maps/documentation/geocoding/requests-geocoding)
* [SCSS Color Functions](https://www.w3schools.com/sass/sass_functions_color.php)
* [Host Context](https://blog.angular-university.io/angular-host-context/)
* [How to get the current route angular](https://www.tektutorialshub.com/angular/how-to-get-the-current-route-or-url-in-angular/)
* [Random User API](https://randomuser.me/documentation#howto)
* [How to set value in template-driven forms in Angular](https://www.tektutorialshub.com/angular/how-to-set-value-in-template-driven-forms-in-angular/)


## Material
* [Mat Select](https://material.angular.io/components/select/examples)
* [Mat Button](https://material.angular.io/components/button/api)
* [Mat Icon](https://www.developer.com/languages/javascript/using-material-font-icons-in-your-angular-11-projects/)
* [Mat Snackbar](https://material.angular.io/components/snack-bar)
* [Mat Progres Spinner](https://material.angular.io/components/progress-spinner/overview)
  * https://stackblitz.com/edit/angular-ezgdww?file=src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fprogress-spinner-overview-example.ts,src%2Fmaterial.module.ts


## Snippets
* general snippets found in planning in the trello workspace
calculate pos on sphere based on latlon
  * make sure the sphere is not rotated
```js
  calcPosFromLatLonRad(lat:number,lon:number,rad:number){
    var phi= (90-lat)*(Math.PI/180)
    var theta= (lon+180)*(Math.PI/180);

    let x = -(Math.sin(phi)*Math.cos(theta)) * rad;
    let y = (Math.cos(phi)) * rad;
    let z = (Math.sin(phi)*Math.sin(theta)) * rad
    return {x,y,z}
  }
```

## Docs

## Media 
<!-- bunch of links -->


# Metrics

## Users

## Netowrk

## Storage


# Stack 

## Frontend
* Angular v14.2.0
### Structure


## Backend
* mapbox v5

### Structure



## Testing

### E2E


#### Structure


## Hosting
* Codesandbox- Frontend Hosting
https://codesandbox.io/p/github/MichaelOdumosu57/crexi_take_home/csb-r76j1j/draft/sparkling-night?file=%2FREADME.md


* Heroku - backend hosting

### CMS
* Comsicjs - text-based
* Cloudinary - media-based



### Logging

## DevOps

### CI/CD/CM
* CircleCi

### Version Control
* Github

## Communication
Facebook 
Slack















