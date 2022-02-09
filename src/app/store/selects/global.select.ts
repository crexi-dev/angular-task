import { ApiSelect } from "./api.select";
import {Store} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";

export class GlobalSelect {
    private ApiSelect: ApiSelect = new ApiSelect(this.store);

    constructor(
        private store: Store<IGlobalState>
    ) {
    }

    Api = {
        GetUsers: this.ApiSelect.GetUsers.bind(this),
        GetUserProfile: this.ApiSelect.GetUserProfile.bind(this),
    }


}
