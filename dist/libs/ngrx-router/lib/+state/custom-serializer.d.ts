import { RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.interfaces';
import * as i0 from "@angular/core";
export declare class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl;
    static ɵfac: i0.ɵɵFactoryDef<CustomSerializer, never>;
    static ɵprov: i0.ɵɵInjectableDef<CustomSerializer>;
}
//# sourceMappingURL=custom-serializer.d.ts.map