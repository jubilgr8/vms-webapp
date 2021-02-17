import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as RouterActions from './router.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class RouterEffects {
    constructor(action$, router, location) {
        this.action$ = action$;
        this.router = router;
        this.location = location;
        this.navigate$ = createEffect(() => this.action$.pipe(ofType(RouterActions.go), map(action => action.to), tap(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras)))), { dispatch: false });
        this.navigateBack$ = createEffect(() => this.action$.pipe(ofType(RouterActions.back), tap(() => this.location.back())), { dispatch: false });
        this.navigateForward$ = createEffect(() => this.action$.pipe(ofType(RouterActions.forward), tap(() => this.location.forward())), { dispatch: false });
    }
}
RouterEffects.ɵfac = function RouterEffects_Factory(t) { return new (t || RouterEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.Location)); };
RouterEffects.ɵprov = i0.ɵɵdefineInjectable({ token: RouterEffects, factory: RouterEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterEffects, [{
        type: Injectable
    }], function () { return [{ type: i1.Actions }, { type: i2.Router }, { type: i3.Location }]; }, null); })();
//# sourceMappingURL=router.effects.js.map