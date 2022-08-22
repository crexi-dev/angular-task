import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppLogoComponent } from './app-logo';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageComponent } from './page';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    declarations: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent
    ],
    exports: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        MatSnackBarModule,
        RouterModule
    ]
})
export class LayoutModule {}
