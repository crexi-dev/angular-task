// angular
import { Component, Input } from '@angular/core';

// i18n
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'crx-header',
    styleUrls: ['./header.scss'],
    templateUrl: './header.html'
})
export class HeaderComponent {

    constructor(
        public translateService: TranslateService,
    ){}
    @Input() pageTitle = '';

    i18nButtons= Array(3)
    .fill(null)
    .map((nullVal,index0)=>{
      return {
        label:"page.i18nButtons."+index0,
        click:()=>{
          this.translateService.use(["en","es","de"][index0])
        }
      }
    })
}
