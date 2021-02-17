import { Params, NavigationExtras } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
export declare const ngrxRouterFeatureKey = "router";
export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}
export interface RouterState {
    readonly [ngrxRouterFeatureKey]: fromRouter.RouterReducerState<RouterStateUrl>;
}
export interface NgrxRoute {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
}
//# sourceMappingURL=router.interfaces.d.ts.map