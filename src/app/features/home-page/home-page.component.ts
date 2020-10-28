import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    styleUrls: ['./home-page.component.less'],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {

    constructor (private route: Router) {}

    public goToAllProfile (): void {

        this.route.navigate(['/profiles']);

    }

    public goToProfile (): void {

        this.route.navigate(['/profile']);

    }




}
