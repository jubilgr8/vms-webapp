import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomSerializer {
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
CustomSerializer.ɵprov = i0.ɵɵdefineInjectable({ token: CustomSerializer, factory: CustomSerializer.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomSerializer, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=custom-serializer.js.map