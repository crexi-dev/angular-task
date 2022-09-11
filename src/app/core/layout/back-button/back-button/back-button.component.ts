import { Component, Input } from '@angular/core';

@Component({
    selector: 'crx-back-button',
    styleUrls: ['./back-button.component.scss'],
    templateUrl: './back-button.component.html'

})
export class BackButtonComponent {

    @Input() link = '';

}
