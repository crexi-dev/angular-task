import {createSelector, Selector} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";
import {globalFeatureSelector} from "@store/selectors/global.selectors";

export class ApiSelectors {
    static GetUsers(): Selector<IGlobalState, any> {
        return createSelector(globalFeatureSelector, (state: IGlobalState) => state.global.ApiData.Users);
    }

    static GetUserProfile(): Selector<IGlobalState, any> {
        return createSelector(globalFeatureSelector, (state: IGlobalState) => state.global.ApiData.UserProfile);
    }
}
