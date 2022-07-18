import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrxDatePipe } from './date.pipe';

@NgModule({
    declarations: [
        CrxDatePipe
    ],
    exports: [
        CrxDatePipe
    ],
    imports: [
        CommonModule
    ]
})
export class CrxDateModule {
}
