// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// layout componets
import { AppLogoComponent } from './app-logo';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageComponent } from './page';
import { PageNotFoundComponent } from './page-not-found';
import { SnackBarContentComponent } from './snack-bar-content/snack-bar-content.component';


// materinal
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


// ngrx store
import { StoreModule } from '@ngrx/store';
import { getLayoutReducer } from './store/layout.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

let material = [
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule
]

let components = [
    AppLogoComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    PageNotFoundComponent,
]

@NgModule({
    declarations: [
        ...components,
        SnackBarContentComponent,
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ...material,
        TranslateModule,
        BrowserAnimationsModule,
        StoreModule.forFeature('layout', getLayoutReducer),
        
    ]
})
export class LayoutModule {}
