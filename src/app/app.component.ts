import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfiles } from '@store/selectors';

@Component({
    selector: 'crx-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent {

    title = 'angular-task';
    users$ = this.store.select(getProfiles);

    constructor (private store: Store<AppState>) { }

    ngOnInit (): void {

        this.users$.subscribe((users) => {

            if (!users.length) {

                this.store.dispatch(profileActions.loadProfileList());

            }

        });

    }

}
