import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import * as i0 from "@angular/core";
export declare class RouterEffects {
    private action$;
    private router;
    private location;
    navigate$: import("rxjs").Observable<import("./router.interfaces").NgrxRoute> & import("@ngrx/effects").CreateEffectMetadata;
    navigateBack$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[router] BACK">> & import("@ngrx/effects").CreateEffectMetadata;
    navigateForward$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[router] FORWARD">> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(action$: Actions, router: Router, location: Location);
    static ɵfac: i0.ɵɵFactoryDef<RouterEffects, never>;
    static ɵprov: i0.ɵɵInjectableDef<RouterEffects>;
}
//# sourceMappingURL=router.effects.d.ts.map