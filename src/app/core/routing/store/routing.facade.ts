import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { routingActions } from '@store/actions';
import { GoPayload } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class RoutingFacade {
    constructor (private store: Store<{}>) {}

    // Actions
    public go(path: GoPayload): void {
        this.store.dispatch(routingActions.go(path));
    }

    // Selectors
}
