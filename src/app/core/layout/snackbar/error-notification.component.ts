import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
    styleUrls: ['./error-notification.component.scss'],
    template: `
        <div class="close-notification">
            <button mat-button (click)="close()">[close]</button>
        </div>

        <div class="message">{{ data }}</div>

        <div class="refresh">
            <a href="javascript:void(0)" (click)="refreshPage()">Try again</a>
        </div>
    `
})
export class ErrorNotificationComponent {

    constructor (@Inject(MAT_SNACK_BAR_DATA) public data: string, private _snackBar: MatSnackBar) {}

    close = () => this._snackBar.dismiss();

    refreshPage = () => location.reload();

}
