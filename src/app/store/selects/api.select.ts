import {IGlobalState} from "../../models/store/global-state.model";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {GlobalSelectors} from "@store/selectors/global.selectors";
import {filter} from "rxjs/operators";

export class ApiSelect {
    store!: Store<IGlobalState>;

    constructor(store: Store<IGlobalState>) {
        this.store = store;
    }

    GetUsers(showNull = false): Observable<any> {
        if (showNull) {
            return this.store.pipe(
                select(GlobalSelectors.ApiData.GetUsers)
            );
        } else {
            return this.store.pipe(
                select(GlobalSelectors.ApiData.GetUsers),
                filter(data => data !== null && data !== undefined)
            );
        }
    }

    GetUserProfile(showNull = false): Observable<any> {
        if (showNull) {
            return this.store.pipe(
                select(GlobalSelectors.ApiData.GetUserProfile),
            )
        } else {
            return this.store.pipe(
                select(GlobalSelectors.ApiData.GetUserProfile),
                filter(data => data !== null && data !== undefined)
            )
        }
    }
}
