import { Location, CommonModule } from '@angular/common';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { createEffect, ofType, Actions, EffectsModule, EffectsFeatureModule } from '@ngrx/effects';
import { RouterStateSerializer, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { createAction, props, StoreModule, StoreFeatureModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}
CustomSerializer.ɵfac = function CustomSerializer_Factory(t) { return new (t || CustomSerializer)(); };
CustomSerializer.ɵprov = ɵɵdefineInjectable({ token: CustomSerializer, factory: CustomSerializer.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CustomSerializer, [{
        type: Injectable
    }], null, null); })();

const go = createAction('[router] Go', props());
const back = createAction('[router] BACK');
const forward = createAction('[router] FORWARD');

class RouterEffects {
    constructor(action$, router, location) {
        this.action$ = action$;
        this.router = router;
        this.location = location;
        this.navigate$ = createEffect(() => this.action$.pipe(ofType(go), map(action => action.to), tap(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras)))), { dispatch: false });
        this.navigateBack$ = createEffect(() => this.action$.pipe(ofType(back), tap(() => this.location.back())), { dispatch: false });
        this.navigateForward$ = createEffect(() => this.action$.pipe(ofType(forward), tap(() => this.location.forward())), { dispatch: false });
    }
}
RouterEffects.ɵfac = function RouterEffects_Factory(t) { return new (t || RouterEffects)(ɵɵinject(Actions), ɵɵinject(Router), ɵɵinject(Location)); };
RouterEffects.ɵprov = ɵɵdefineInjectable({ token: RouterEffects, factory: RouterEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RouterEffects, [{
        type: Injectable
    }], function () { return [{ type: Actions }, { type: Router }, { type: Location }]; }, null); })();

const ngrxRouterFeatureKey = 'router';

class NgrxRouterModule {
}
NgrxRouterModule.ɵmod = ɵɵdefineNgModule({ type: NgrxRouterModule });
NgrxRouterModule.ɵinj = ɵɵdefineInjector({ factory: function NgrxRouterModule_Factory(t) { return new (t || NgrxRouterModule)(); }, providers: [RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]], imports: [[
            CommonModule,
            StoreModule.forFeature(ngrxRouterFeatureKey, routerReducer),
            EffectsModule.forFeature([RouterEffects]),
            StoreRouterConnectingModule.forRoot({ stateKey: ngrxRouterFeatureKey }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgrxRouterModule, { imports: [CommonModule, StoreFeatureModule, EffectsFeatureModule, StoreRouterConnectingModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgrxRouterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    StoreModule.forFeature(ngrxRouterFeatureKey, routerReducer),
                    EffectsModule.forFeature([RouterEffects]),
                    StoreRouterConnectingModule.forRoot({ stateKey: ngrxRouterFeatureKey }),
                ],
                providers: [RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NgrxRouterModule };
//# sourceMappingURL=vms-ngrx-router.js.map
