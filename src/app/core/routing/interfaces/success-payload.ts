// import { ActivatedRouteSnapshot } from '@angular/router';
import { RouteHistoryMember } from './route-history-member';

export interface SuccessPayload {
    // Removing this property due to redux devTools crashing.
    // But also if strictactionserializability is configured
    // Actions and Store need to be a JSON object rather
    // than a class.
    // https://ngrx.io/guide/store/configuration/runtime-checks#strictactionserializability
    // currentRoute: ActivatedRouteSnapshot;
    history: RouteHistoryMember[];
    name: string;
    params?: Record<string, string>;
    queryParams?: Record<string, string>;
    url: string;
}
