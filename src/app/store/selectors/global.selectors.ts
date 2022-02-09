import {createFeatureSelector} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";
import {ApiSelectors} from "@store/selectors/api.selectors";
// import {ApiSelectors} from "../selectors/api.selectors";

export * from '@core/routing/store/routing.selectors';
export * from '@features/profile/store/profile.selectors';

export const GLOBAL_FEATURE_NAME = 'global';
export const globalFeatureSelector = createFeatureSelector<IGlobalState>(GLOBAL_FEATURE_NAME);

export const GlobalSelectors = {
    ApiData: {
        GetUsers:  ApiSelectors.GetUsers(),
        GetUserProfile: ApiSelectors.GetUserProfile(),
    }
}
