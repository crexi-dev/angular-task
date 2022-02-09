import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";
import {GlobalActions} from "@store/actions/global.actions";

@Injectable()
export class ApiCommands {
    constructor(
        private store: Store<IGlobalState>
    ) {}

    UpdateUsers(data: any) {
        return this.store.dispatch(GlobalActions.Api.UpdateUsers({ payload: data}));
    }

    UpdateUserProfile(data: any) {
        return this.store.dispatch(GlobalActions.Api.UpdateUserProfile({ payload: data }));
    }
}
