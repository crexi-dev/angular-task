import {IGlobalState} from "../../models/store/global-state.model";
import {Store} from "@ngrx/store";
import { ApiCommands } from "@store/commands/api.commands";

export class GlobalCommands {
    private ApiCommands: ApiCommands = new ApiCommands(this.store);

    constructor(private store: Store<IGlobalState>) {
        this.store = store;
    }

    Api = {
        UpdateUsers: this.ApiCommands.UpdateUsers.bind(this),
        UpdateUserProfile: this.ApiCommands.UpdateUserProfile.bind(this),
    }
}
