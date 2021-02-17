import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CustomSerializer } from './+state/custom-serializer';
import { RouterEffects } from './+state/router.effects';
import { ngrxRouterFeatureKey } from './+state/router.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
import * as i3 from "@ngrx/router-store";
export class NgrxRouterModule {
}
NgrxRouterModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgrxRouterModule });
NgrxRouterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgrxRouterModule_Factory(t) { return new (t || NgrxRouterModule)(); }, providers: [RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]], imports: [[
            CommonModule,
            StoreModule.forFeature(ngrxRouterFeatureKey, routerReducer),
            EffectsModule.forFeature([RouterEffects]),
            StoreRouterConnectingModule.forRoot({ stateKey: ngrxRouterFeatureKey }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgrxRouterModule, { imports: [CommonModule, i1.StoreFeatureModule, i2.EffectsFeatureModule, i3.StoreRouterConnectingModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgrxRouterModule, [{
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
//# sourceMappingURL=ngrx-router.module.js.map