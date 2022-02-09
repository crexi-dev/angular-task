import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {GlobalCommands} from "@store/commands/global.commands";
import {GlobalSelect} from "@store/selects/global.select";
import {IGlobalState} from "../models/store/global-state.model";
import {Store} from "@ngrx/store";

@Component({
    selector: 'base-cmp',
    template: ''
})
export class BaseComponent implements OnDestroy {
    globalCommands!: GlobalCommands;
    globalSelect!: GlobalSelect;
    subscriptions: Subscription[] = [];

    constructor(
        store: Store<IGlobalState>
    ) {
        this.globalCommands = new GlobalCommands(store);
        this.globalSelect = new GlobalSelect(store);
    }

    ngOnDestroy() {
        this.unsubscribeToSubscriptionsOnDestroy();
    }

    // register subscription to unsubscribe on component destroy
    reg$(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    unsubscribeToSubscriptionsOnDestroy() {
        this.subscriptions?.forEach((sub: Subscription) => {
         if(sub && sub.unsubscribe && typeof sub.unsubscribe === 'function') {
        sub?.unsubscribe();
            }
        });
}
}
