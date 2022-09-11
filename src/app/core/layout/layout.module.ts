import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLogoComponent } from './app-logo';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageComponent } from './page';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from './page-not-found';
import { BackButtonComponent } from './back-button/back-button/back-button.component';

@NgModule({
    declarations: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent,
        BackButtonComponent
    ],
    exports: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent,
        BackButtonComponent,
        MatButtonModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class LayoutModule {}
