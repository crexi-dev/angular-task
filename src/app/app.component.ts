import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '@core/notification.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { ErrorNotificationComponent } from '@core/layout/snackbar/error-notification.component';

@Component({
    selector: 'crx-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy, OnInit {

    title = 'angular-task';
    #onDestroy$ = new Subject<void>();

    constructor (private _notificationService: NotificationService, private _snackBar: MatSnackBar) {}

    ngOnInit (): void {

        this.#showErrorNotification();

    }

    ngOnDestroy (): void {

        this.#onDestroy$.next();
        this.#onDestroy$.complete();

    }

    #showErrorNotification (): void {

        this._notificationService.errorMessage$.pipe(
            filter((message) => message.length > 0),
            distinctUntilChanged(),
            takeUntil(this.#onDestroy$)
        ).subscribe((message) => {

            this._snackBar.openFromComponent(ErrorNotificationComponent, {
                data: message,
                verticalPosition: 'top'
            });

        });

    }

}
