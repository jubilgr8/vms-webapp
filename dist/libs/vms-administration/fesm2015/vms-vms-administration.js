import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class VmsAdministrationModule {
}
VmsAdministrationModule.ɵmod = ɵɵdefineNgModule({ type: VmsAdministrationModule });
VmsAdministrationModule.ɵinj = ɵɵdefineInjector({ factory: function VmsAdministrationModule_Factory(t) { return new (t || VmsAdministrationModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(VmsAdministrationModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(VmsAdministrationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { VmsAdministrationModule };
//# sourceMappingURL=vms-vms-administration.js.map
