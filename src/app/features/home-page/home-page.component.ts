import { Component } from '@angular/core';
import { RoutingService } from '@core/routing';

@Component({
    selector: 'crx-home-page',
    styleUrls: ['./home-page.component.less'],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    constructor (private routingService: RoutingService) {}

    goTo(route: string) {
        this.routingService.toRoute([route]);
    }
}
