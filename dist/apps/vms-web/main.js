(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!****************************************!*\
  !*** multi ./apps/vms-web/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jubil_kelkar\vms\apps\vms-web\src\main.ts */"0B6H");


/***/ }),

/***/ "0B6H":
/*!**********************************!*\
  !*** ./apps/vms-web/src/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "dUe9");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "SjGn");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "0oDr":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.reducer.ts ***!
  \**************************************************************/
/*! exports provided: ngrxErrorFeatureKey, ngrxErrorInitialState, ngrxErrorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorFeatureKey", function() { return ngrxErrorFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorInitialState", function() { return ngrxErrorInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorReducer", function() { return ngrxErrorReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");


const ngrxErrorFeatureKey = 'ngrxError';
const ngrxErrorInitialState = {
    code: -1,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(ngrxErrorInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__["throw401Error"], (state, action) => ({ code: action.error.status, message: action.error.message })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__["throw404Error"], (state, action) => ({ code: action.error.status, message: action.error.message })));
function ngrxErrorReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "14lc":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.effects.ts ***!
  \**************************************************************/
/*! exports provided: NgrxErrorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorEffects", function() { return NgrxErrorEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");
/* harmony import */ var _vms_ngrx_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vms/ngrx-router */ "EdWO");







class NgrxErrorEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.error401$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["throw401Error"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => Object(_vms_ngrx_router__WEBPACK_IMPORTED_MODULE_4__["go"])({ to: { path: ['/login'] } }))));
        this.error404$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["throw404Error"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => Object(_vms_ngrx_router__WEBPACK_IMPORTED_MODULE_4__["go"])({ to: { path: ['/'] } }))));
    }
}
NgrxErrorEffects.ɵfac = function NgrxErrorEffects_Factory(t) { return new (t || NgrxErrorEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
NgrxErrorEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxErrorEffects, factory: NgrxErrorEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "17QB":
/*!***********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.actions.ts ***!
  \***********************************************************/
/*! exports provided: go, back, forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const go = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] Go', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const back = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] BACK');
const forward = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] FORWARD');


/***/ }),

/***/ "1Amc":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.actions.ts ***!
  \**************************************************/
/*! exports provided: getUser, getUserSuccess, getUserFail, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return getUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFail", function() { return getUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return registerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER');
const getUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN');
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN_FAIL');
const register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER');
const registerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER_FAIL');
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGOUT');


/***/ }),

/***/ "2S4z":
/*!******************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/ngrx-forms.module.ts ***!
  \******************************************************/
/*! exports provided: NgrxFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return NgrxFormsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/ngrx-forms.effects */ "atB1");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/ngrx-forms.facade */ "w6+i");
/* harmony import */ var _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/ngrx-forms.reducer */ "ndgL");
/* harmony import */ var _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-form/dynamic-field.directive */ "bhtH");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "5W4/");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/input/input.component */ "HPTZ");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/textarea/textarea.component */ "zt7d");
/* harmony import */ var _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-errors/list-errors.component */ "T7Fx");
















class NgrxFormsModule {
}
NgrxFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgrxFormsModule });
NgrxFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgrxFormsModule_Factory(t) { return new (t || NgrxFormsModule)(); }, providers: [_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"], _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsFeatureKey"], _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsReducer"], {
                initialState: _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgrxFormsModule, { declarations: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__["DynamicFieldDirective"], _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]], exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsFeatureKey"], _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsReducer"], {
                        initialState: _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"]]),
                ],
                providers: [_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"], _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsFacade"]],
                declarations: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__["DynamicFieldDirective"], _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]],
                entryComponents: [_fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"]],
                exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "2dsC":
/*!**************************************!*\
  !*** ./libs/ngrx-error/src/index.ts ***!
  \**************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-error.module */ "V/ak");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__["NgrxErrorModule"]; });




/***/ }),

/***/ "5HVB":
/*!********************************************************!*\
  !*** ./libs/auth/src/lib/local-storage-jwt.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return LocalStorageJwtService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LocalStorageJwtService {
    getItem() {
        const data = localStorage.getItem('jwtToken');
        if (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    setItem(data) {
        localStorage.setItem('jwtToken', data);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);
    }
    removeItem() {
        localStorage.removeItem('jwtToken');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    }
}
LocalStorageJwtService.ɵfac = function LocalStorageJwtService_Factory(t) { return new (t || LocalStorageJwtService)(); };
LocalStorageJwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageJwtService, factory: LocalStorageJwtService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageJwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "5W4/":
/*!************************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.ts ***!
  \************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-field.directive */ "bhtH");








function DynamicFormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", field_r1)("group", ctx_r0.form);
} }
class DynamicFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.updateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.formBuilder = (structure) => {
            const group = this.fb.group({});
            structure.forEach(field => group.addControl(field.name, this.control(field)));
            return group;
        };
        this.control = (field) => {
            return this.fb.control('', field.validator);
        };
        this.patchValue = ([form, data]) => {
            !!data ? form.patchValue(data, { emitEvent: false }) : form.patchValue({}, { emitEvent: false });
        };
    }
    ngOnInit() {
        this.structure$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.formBuilder), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(f => (this.form = f)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(f => this.listenFormChanges(f)), f$ => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([f$, this.data$]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(this.patchValue);
        if (this.touchedForm$) {
            this.touchedForm$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(t => !t && !!this.form), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
                .subscribe(_ => this.form.reset());
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    listenFormChanges(form) {
        form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((changes) => this.updateForm.emit(changes));
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { structure$: "structure$", data$: "data$", touchedForm$: "touchedForm$" }, outputs: { updateForm: "updateForm" }, decls: 3, vars: 4, consts: [["autocomplete", "off", 1, "dynamic-form", 3, "formGroup"], ["appDynamicField", "", 3, "field", "group", 4, "ngFor", "ngForOf"], ["appDynamicField", "", 3, "field", "group"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_1_Template, 1, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.structure$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__["DynamicFieldDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-form',
                templateUrl: './dynamic-form.component.html',
                styleUrls: ['./dynamic-form.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { structure$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touchedForm$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7GVx":
/*!*************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.facade.ts ***!
  \*************************************************/
/*! exports provided: AuthFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return AuthFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.selectors */ "MFcj");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "1Amc");






class AuthFacade {
    constructor(store) {
        this.store = store;
        this.auht$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getAuth);
        this.user$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getUser);
        this.isLoggedIn$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getLoggedIn);
    }
    login() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["login"]());
    }
    logout() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["logout"]());
    }
    register() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["register"]());
    }
    user() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["getUser"]());
    }
}
AuthFacade.ɵfac = function AuthFacade_Factory(t) { return new (t || AuthFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AuthFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthFacade, factory: AuthFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "A47K":
/*!*******************************!*\
  !*** ./libs/api/src/index.ts ***!
  \*******************************/
/*! exports provided: ApiModule, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api.module */ "v3oI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _lib_api_module__WEBPACK_IMPORTED_MODULE_0__["ApiModule"]; });

/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api.service */ "yPkS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _lib_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony import */ var _lib_shared_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared.interfaces */ "bXkE");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "AxuA":
/*!**************************************!*\
  !*** ./libs/ngrx-forms/src/index.ts ***!
  \**************************************/
/*! exports provided: NgrxFormsModule, setData, updateData, setStructure, setErrors, initializeErrors, initializeForm, resetForm, ngrxFormsFeatureKey, ngrxFormsInitialState, ngrxFormsReducer, NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-forms.module */ "2S4z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"]; });

/* harmony import */ var _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.actions */ "StMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["updateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStructure", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setStructure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["initializeErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["initializeForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["resetForm"]; });

/* harmony import */ var _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.reducer */ "ndgL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsFeatureKey", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsReducer"]; });

/* harmony import */ var _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.facade */ "w6+i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsFacade"]; });

/* harmony import */ var _lib_state_ngrx_forms_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.interfaces */ "SIXF");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "B0Tb":
/*!******************************************!*\
  !*** ./libs/auth/src/lib/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/ngrx-forms/src */ "AxuA");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/auth.effects */ "M+C9");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/auth.facade */ "7GVx");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/auth.reducer */ "OCb0");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guard.service */ "KovN");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ "PjsD");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "FVTS");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "h3W9");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./token-interceptor.service */ "rIoB");
// import { NgrxFormsModule } from '@vms/ngrx-forms';




















const authRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
    },
]);
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"],
        _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__["AuthFacade"],
        _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
        _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageJwtService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsModule"],
            authRouting,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authFeatureKey"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"], {
                initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsModule"],
                    authRouting,
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authFeatureKey"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"], {
                        initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"]]),
                ],
                providers: [
                    _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"],
                    _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
                    _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                    _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__["AuthFacade"],
                    _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                    _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageJwtService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                        multi: true,
                    },
                ],
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "EdWO":
/*!***************************************!*\
  !*** ./libs/ngrx-router/src/index.ts ***!
  \***************************************/
/*! exports provided: NgrxRouterModule, go, back, forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-router.module */ "ddfQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__["NgrxRouterModule"]; });

/* harmony import */ var _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/router.actions */ "17QB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "go", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "back", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["forward"]; });





/***/ }),

/***/ "FVTS":
/*!****************************************************!*\
  !*** ./libs/auth/src/lib/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/ngrx-forms/src */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/auth.facade */ "7GVx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */ "T7Fx");
/* harmony import */ var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */ "5W4/");










const _c0 = function () { return ["/register"]; };
const structure = [
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Username',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        attrs: {
            type: 'password',
        },
    },
];
class LoginComponent {
    constructor(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    ngOnInit() {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    }
    updateForm(changes) {
        this.ngrxFormsFacade.updateData(changes);
    }
    submit() {
        this.facade.login();
    }
    ngOnDestroy() {
        this.ngrxFormsFacade.initializeForm();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 4, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "data$", "structure$", "updateForm"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Need an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-list-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-dynamic-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updateForm", function LoginComponent_Template_app_dynamic_form_updateForm_10_listener($event) { return ctx.updateForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"] }, { type: _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "HPTZ":
/*!*****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/fields/input/input.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InputComponent {
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { field: "field", group: "group" }, decls: 2, vars: 4, consts: [[1, "form-group", 3, "formGroup"], [1, "form-control", "form-control-lg", 3, "formControlName"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.field == null ? null : ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx.field == null ? null : ctx.field.placeholder)("type", (ctx.field == null ? null : ctx.field.attrs == null ? null : ctx.field.attrs.type) || "text");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ItLX":
/*!**************************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/custom-serializer.ts ***!
  \**************************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
CustomSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomSerializer, factory: CustomSerializer.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSerializer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "KovN":
/*!*************************************************!*\
  !*** ./libs/auth/src/lib/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");







class AuthGuardService {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return this.storage.getItem().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(token => {
            if (!token) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageJwtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageJwtService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "M+C9":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.effects.ts ***!
  \**************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "PjsD");
/* harmony import */ var libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/ngrx-forms/src */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.actions */ "1Amc");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../local-storage-jwt.service */ "5HVB");
















class AuthEffects {
    constructor(actions$, localStorageJwtService, ngrxFormsFacade, authService, router) {
        this.actions$ = actions$;
        this.localStorageJwtService = localStorageJwtService;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.authService = authService;
        this.router = router;
        this.getUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(item => this.authService.user().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUserSuccess"]({ user: data.user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUserFail"](error)))))));
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(([action, data]) => this.authService.login(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"]({ user: response.user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_1__["setErrors"]({ errors: result.error.errors })))))));
        this.loginOrRegisterSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_7__["registerSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(action => {
            this.localStorageJwtService.setItem(action.user.token);
            this.router.navigateByUrl('/');
        })), { dispatch: false });
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(([action, data]) => this.authService.register(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["registerSuccess"]({ user: response.user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_1__["setErrors"])({ errors: result.error.errors })))))));
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(action => {
            this.localStorageJwtService.removeItem();
            this.router.navigateByUrl('login');
        })), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageJwtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageJwtService"] }, { type: libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "MFcj":
/*!****************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.selectors.ts ***!
  \****************************************************/
/*! exports provided: getAuth, getLoggedIn, getUser, authQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedIn", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authQuery", function() { return authQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "OCb0");


const getAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authFeatureKey"]);
const getLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, (auth) => auth.loggedIn);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, (auth) => auth.user);
const authQuery = {
    getAuth,
    getLoggedIn,
    getUser,
};


/***/ }),

/***/ "OCb0":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.reducer.ts ***!
  \**************************************************/
/*! exports provided: authFeatureKey, Status, authInitialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFeatureKey", function() { return authFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "1Amc");


const authFeatureKey = 'auth';
var Status;
(function (Status) {
    Status["INIT"] = "INIT";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
})(Status || (Status = {}));
const authInitialState = {
    loggedIn: false,
    status: Status.INIT,
    user: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: '',
    },
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(authInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { loggedIn: true, user: action.user }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserFail"], (state, action) => (Object.assign({}, authInitialState))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["register"], (state, _) => (Object.assign(Object.assign({}, state), { status: Status.IN_PROGRESS }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { loggedIn: true, status: Status.INIT, user: action.user }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerFail"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginFail"], (state, _) => (Object.assign(Object.assign({}, state), { status: Status.INIT }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"], (state, action) => (Object.assign({}, authInitialState))));
function authReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "PjsD":
/*!*******************************************!*\
  !*** ./libs/auth/src/lib/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var libs_api_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/api/src */ "A47K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    user() {
        return this.apiService.get('/user');
    }
    login(credentials) {
        return this.apiService.post('/users/login', { user: credentials });
    }
    register(credentials) {
        return this.apiService.post('/users', { user: credentials });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](libs_api_src__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: libs_api_src__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "SIXF":
/*!*****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.interfaces.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "SjGn":
/*!********************************************!*\
  !*** ./apps/vms-web/src/app/app.module.ts ***!
  \********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var libs_api_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/api/src */ "A47K");
/* harmony import */ var libs_auth_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/auth/src */ "gy9y");
/* harmony import */ var libs_ngrx_error_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/ngrx-error/src */ "2dsC");
/* harmony import */ var libs_ngrx_router_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/ngrx-router/src */ "EdWO");
/* harmony import */ var libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/ngrx-forms/src */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nrwl/angular */ "74yJ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "dUe9");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "pJ/u");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/footer/footer.component */ "ZYgo");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "U89D");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            libs_api_src__WEBPACK_IMPORTED_MODULE_0__["ApiModule"],
            libs_auth_src__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _nrwl_angular__WEBPACK_IMPORTED_MODULE_11__["NxModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                {
                    path: '',
                    loadChildren: () => __webpack_require__.e(/*! import() | vms-vms-administration */ "vms-vms-administration").then(__webpack_require__.bind(null, /*! @vms/vms-administration */ "42yb")).then((m) => m.VmsAdministrationModule),
                },
            ], {
                initialNavigation: 'enabled',
                useHash: true,
                relativeLinkResolution: 'legacy',
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
            libs_ngrx_router_src__WEBPACK_IMPORTED_MODULE_3__["NgrxRouterModule"],
            libs_ngrx_error_src__WEBPACK_IMPORTED_MODULE_2__["NgrxErrorModule"],
            libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_4__["NgrxFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"]], imports: [libs_api_src__WEBPACK_IMPORTED_MODULE_0__["ApiModule"],
        libs_auth_src__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _nrwl_angular__WEBPACK_IMPORTED_MODULE_11__["NxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"], libs_ngrx_router_src__WEBPACK_IMPORTED_MODULE_3__["NgrxRouterModule"],
        libs_ngrx_error_src__WEBPACK_IMPORTED_MODULE_2__["NgrxErrorModule"],
        libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_4__["NgrxFormsModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    libs_api_src__WEBPACK_IMPORTED_MODULE_0__["ApiModule"],
                    libs_auth_src__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                    _nrwl_angular__WEBPACK_IMPORTED_MODULE_11__["NxModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                        {
                            path: '',
                            loadChildren: () => __webpack_require__.e(/*! import() | vms-vms-administration */ "vms-vms-administration").then(__webpack_require__.bind(null, /*! @vms/vms-administration */ "42yb")).then((m) => m.VmsAdministrationModule),
                        },
                    ], {
                        initialNavigation: 'enabled',
                        useHash: true,
                        relativeLinkResolution: 'legacy',
                    }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
                    libs_ngrx_router_src__WEBPACK_IMPORTED_MODULE_3__["NgrxRouterModule"],
                    libs_ngrx_error_src__WEBPACK_IMPORTED_MODULE_2__["NgrxErrorModule"],
                    libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_4__["NgrxFormsModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "StMj":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts ***!
  \**************************************************************/
/*! exports provided: setData, updateData, setStructure, setErrors, initializeErrors, initializeForm, resetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStructure", function() { return setStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrors", function() { return setErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeErrors", function() { return initializeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeForm", function() { return initializeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return resetForm; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] UPDATE_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_STRUCTURE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_ERRORS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initializeErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] INITIALIZE_ERRORS');
const initializeForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] INITIALIZE_FORM');
const resetForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] RESET_FORM');


/***/ }),

/***/ "T13k":
/*!*************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts ***!
  \*************************************************************/
/*! exports provided: NgrxErrorFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorFacade", function() { return NgrxErrorFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");





class NgrxErrorFacade {
    constructor(store) {
        this.store = store;
    }
    throw401Error(error) {
        this.store.dispatch(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__["throw401Error"]({ error }));
    }
    throw404Error(error) {
        this.store.dispatch(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__["throw404Error"]({ error }));
    }
}
NgrxErrorFacade.ɵfac = function NgrxErrorFacade_Factory(t) { return new (t || NgrxErrorFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
NgrxErrorFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxErrorFacade, factory: NgrxErrorFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "T7Fx":
/*!**********************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/list-errors/list-errors.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/ngrx-forms.facade */ "w6+i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
} }
function ListErrorsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
class ListErrorsComponent {
    constructor(ngrxFormsFacade, changeDetectorRef) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.changeDetectorRef = changeDetectorRef;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.ngrxFormsFacade.errors$.subscribe(e => {
            this.errors = Object.keys(e || {}).map(key => `${key} ${e[key]}`);
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.ngrxFormsFacade.initializeErrors();
    }
}
ListErrorsComponent.ɵfac = function ListErrorsComponent_Factory(t) { return new (t || ListErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ListErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListErrorsComponent, selectors: [["app-list-errors"]], decls: 1, vars: 1, consts: [["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [4, "ngFor", "ngForOf"]], template: function ListErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListErrorsComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.errors == null ? null : ctx.errors.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-errors',
                templateUrl: './list-errors.component.html',
                styleUrls: ['./list-errors.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "U89D":
/*!****************************************************************!*\
  !*** ./apps/vms-web/src/app/layout/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ul_5_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function (a1) { return ["/profile", a1]; };
function NavbarComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_ul_5_img_14_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r1.user.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.username, " ");
} }
class NavbarComponent {
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["conduit-navbar"]], inputs: { user: "user", isLoggedIn: "isLoggedIn" }, decls: 6, vars: 2, consts: [[1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "nav navbar-nav pull-xs-right", 4, "ngIf"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-link", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/editor", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-gear-a"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "user-pic", 3, "src", 4, "ngIf"], [1, "user-pic", 3, "src"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "conduit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_ul_4_Template, 10, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_ul_5_Template, 16, 9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'conduit-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "V/ak":
/*!******************************************************!*\
  !*** ./libs/ngrx-error/src/lib/ngrx-error.module.ts ***!
  \******************************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return NgrxErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/ngrx-error.effects */ "14lc");
/* harmony import */ var _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/ngrx-error.reducer */ "0oDr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngrx-error-interceptor.service */ "hE7n");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "T13k");











class NgrxErrorModule {
}
NgrxErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgrxErrorModule });
NgrxErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgrxErrorModule_Factory(t) { return new (t || NgrxErrorModule)(); }, providers: [
        _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__["NgrxErrorFacade"],
        _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["NgrxErrorInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorFeatureKey"], _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorReducer"], {
                initialState: _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgrxErrorModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorFeatureKey"], _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorReducer"], {
                        initialState: _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"]]),
                ],
                providers: [
                    _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__["NgrxErrorFacade"],
                    _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["NgrxErrorInterceptorService"],
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "WgHb":
/*!****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.selectors.ts ***!
  \****************************************************************/
/*! exports provided: getStructure, getData, isValid, getErrors, getTouchedForm, ngrxFormsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStructure", function() { return getStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchedForm", function() { return getTouchedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsQuery", function() { return ngrxFormsQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-forms.reducer */ "ndgL");


const getNgrxForms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_1__["ngrxFormsFeatureKey"]);
const getStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.structure);
const getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.data);
const isValid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.valid);
const getErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.errors);
const getTouchedForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.touched);
const ngrxFormsQuery = {
    getStructure,
    getData,
    isValid,
    getErrors,
    getTouchedForm,
};


/***/ }),

/***/ "XHEB":
/*!*******************************************************************!*\
  !*** ./apps/vms-web/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "XHEB";

/***/ }),

/***/ "YL2o":
/*!***********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.effects.ts ***!
  \***********************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.actions */ "17QB");










class RouterEffects {
    constructor(action$, router, location) {
        this.action$ = action$;
        this.router = router;
        this.location = location;
        this.navigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["go"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.to), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras)))), { dispatch: false });
        this.navigateBack$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["back"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.location.back())), { dispatch: false });
        this.navigateForward$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["forward"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.location.forward())), { dispatch: false });
    }
}
RouterEffects.ɵfac = function RouterEffects_Factory(t) { return new (t || RouterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); };
RouterEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterEffects, factory: RouterEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZYgo":
/*!****************************************************************!*\
  !*** ./apps/vms-web/src/app/layout/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["conduit-footer"]], decls: 9, vars: 0, consts: [[1, "container"], ["href", "/", 1, "logo-font"], [1, "attribution"], ["href", "https://thinkster.io"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "conduit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " An interactive learning project from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Thinkster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". Code & design licensed under MIT. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'conduit-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "atB1":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.effects.ts ***!
  \**************************************************************/
/*! exports provided: NgrxFormsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsEffects", function() { return NgrxFormsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class NgrxFormsEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.setData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["setData"], _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["updateData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["initializeErrors"]())));
    }
}
NgrxFormsEffects.ɵfac = function NgrxFormsEffects_Factory(t) { return new (t || NgrxFormsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
NgrxFormsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxFormsEffects, factory: NgrxFormsEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxFormsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "bXkE":
/*!***********************************************!*\
  !*** ./libs/api/src/lib/shared.interfaces.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "bhtH":
/*!*************************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/dynamic-form/dynamic-field.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/input/input.component */ "HPTZ");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fields/textarea/textarea.component */ "zt7d");





const componentsMapper = {
    INPUT: _fields_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"],
    TEXTAREA: _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"],
};
class DynamicFieldDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.field = this.field;
            this.component.instance.group = this.group;
        }
    }
    ngOnInit() {
        const component = this.resolver.resolveComponentFactory(componentsMapper[this.field.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.field = this.field;
        this.component.instance.group = this.group;
    }
}
DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) { return new (t || DynamicFieldDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
DynamicFieldDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicFieldDirective, selectors: [["", "appDynamicField", ""]], inputs: { field: "field", group: "group" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFieldDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDynamicField]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cb9J":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts ***!
  \**************************************************************/
/*! exports provided: throw401Error, throw404Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throw401Error", function() { return throw401Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throw404Error", function() { return throw404Error; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const throw401Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrx-error] THROW_401_ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const throw404Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrx-error] THROW_404_ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "dUe9":
/*!******************************************************!*\
  !*** ./apps/vms-web/src/environments/environment.ts ***!
  \******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: "https://localhost:44341/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ddfQ":
/*!********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/ngrx-router.module.ts ***!
  \********************************************************/
/*! exports provided: NgrxRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return NgrxRouterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/custom-serializer */ "ItLX");
/* harmony import */ var _state_router_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/router.effects */ "YL2o");
/* harmony import */ var _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/router.interfaces */ "woSD");












class NgrxRouterModule {
}
NgrxRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgrxRouterModule });
NgrxRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgrxRouterModule_Factory(t) { return new (t || NgrxRouterModule)(); }, providers: [_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"], [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__["CustomSerializer"] }]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"]]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"] }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgrxRouterModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"]]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"] }),
                ],
                providers: [_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"], [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__["CustomSerializer"] }]],
            }]
    }], null, null); })();


/***/ }),

/***/ "gy9y":
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/*! exports provided: AuthModule, getUser, getUserSuccess, getUserFail, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout, authFeatureKey, Status, authInitialState, authReducer, AuthFacade, AuthGuardService, LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ "B0Tb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/auth.actions */ "1Amc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"]; });

/* harmony import */ var _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/auth.reducer */ "OCb0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authFeatureKey", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"]; });

/* harmony import */ var _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/auth.facade */ "7GVx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]; });

/* harmony import */ var _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/auth-guard.service */ "KovN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/local-storage-jwt.service */ "5HVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageJwtService"]; });









/***/ }),

/***/ "h3W9":
/*!**********************************************************!*\
  !*** ./libs/auth/src/lib/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/ngrx-forms/src */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/auth.facade */ "7GVx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function () { return ["/login"]; };
const structure = [
    {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Username',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Email',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        attrs: {
            type: 'password',
        },
    },
];
class RegisterComponent {
    constructor(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    ngOnInit() {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    }
    updateForm(changes) {
        this.ngrxFormsFacade.updateData(changes);
    }
    submit() {
        this.facade.register();
    }
    ngOnDestroy() {
        this.ngrxFormsFacade.initializeForm();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 11, vars: 2, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: libs_ngrx_forms_src__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"] }, { type: _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "hE7n":
/*!*******************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/ngrx-error-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: NgrxErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorInterceptorService", function() { return NgrxErrorInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "T13k");







class NgrxErrorInterceptorService {
    constructor(facade) {
        this.facade = facade;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                switch (error.status) {
                    case 401:
                        this.facade.throw401Error(error);
                        break;
                    case 404:
                        this.facade.throw404Error(error);
                        break;
                    default:
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
NgrxErrorInterceptorService.ɵfac = function NgrxErrorInterceptorService_Factory(t) { return new (t || NgrxErrorInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorFacade"])); };
NgrxErrorInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgrxErrorInterceptorService, factory: NgrxErrorInterceptorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxErrorInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorFacade"] }]; }, null); })();


/***/ }),

/***/ "ndgL":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts ***!
  \**************************************************************/
/*! exports provided: ngrxFormsFeatureKey, ngrxFormsInitialState, ngrxFormsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsFeatureKey", function() { return ngrxFormsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return ngrxFormsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return ngrxFormsReducer; });
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const ngrxFormsFeatureKey = 'ngrxForms';
const ngrxFormsInitialState = {
    data: {},
    structure: [],
    valid: true,
    errors: {},
    touched: false,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(ngrxFormsInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setData"], (state, action) => (Object.assign(Object.assign({}, state), { data: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["updateData"], (state, action) => {
    const data = Object.assign(Object.assign({}, state.data), action.data);
    return Object.assign(Object.assign({}, state), { data, touched: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setStructure"], (state, action) => (Object.assign(Object.assign({}, state), { structure: action.structure.slice(0) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setErrors"], (state, action) => (Object.assign(Object.assign({}, state), { errors: action.errors }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["initializeErrors"], (state, action) => (Object.assign(Object.assign({}, state), { errors: {} }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["initializeForm"], (state, action) => ngrxFormsInitialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["resetForm"], (state, action) => (Object.assign(Object.assign({}, state), { touched: false }))));
function ngrxFormsReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "pJ/u":
/*!***********************************************!*\
  !*** ./apps/vms-web/src/app/app.component.ts ***!
  \***********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'vms-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["vms-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.gutter-left[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n.col-span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: #143055;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 0 36px;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: 18px;\n  font-size: 24px;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  margin: 40px 0 10px 0;\n}\n.resources[_ngcontent-%COMP%] {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-gap: 9px;\n  grid-template-columns: 1fr 1fr;\n}\n.resource[_ngcontent-%COMP%] {\n  color: #0094ba;\n  height: 36px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 3px 9px;\n  text-decoration: none;\n}\n.resource[_ngcontent-%COMP%]:hover {\n  background-color: rgba(68, 138, 255, 0.04);\n}\npre[_ngcontent-%COMP%] {\n  padding: 9px;\n  border-radius: 4px;\n  background-color: black;\n  color: #eee;\n}\ndetails[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 3px 9px;\n  margin-bottom: 9px;\n}\nsummary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  height: 36px;\n  line-height: 36px;\n}\n.github-star-container[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  line-height: 20px;\n}\n.github-star-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #333;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRkY7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVJGO0FBV0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFURjtBQVlBO0VBQ0UsMENBQUE7QUFWRjtBQWFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBWEY7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFlQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYkY7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFmRjtBQWtCQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBaEJGO0FBbUJBO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBakJGO0FBbUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWpCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZ3V0dGVyLWxlZnQge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uY29sLXNwYW4tMiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDMwNTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAwIDM2cHg7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDQwcHggMCAxMHB4IDA7XG59XG5cbi5yZXNvdXJjZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA5cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnJlc291cmNlIHtcbiAgY29sb3I6ICMwMDk0YmE7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yZXNvdXJjZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDEzOCwgMjU1LCAwLjA0KTtcbn1cblxucHJlIHtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2VlZTtcbn1cblxuZGV0YWlscyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbn1cblxuc3VtbWFyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuLmdpdGh1Yi1zdGFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZ2l0aHViLXN0YXItY29udGFpbmVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vms-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less'],
            }]
    }], null, null); })();


/***/ }),

/***/ "rIoB":
/*!********************************************************!*\
  !*** ./libs/auth/src/lib/token-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");




class TokenInterceptorService {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }
    intercept(request, next) {
        let token;
        this.localStorage.getItem().subscribe(t => (token = t));
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                },
            });
        }
        return next.handle(request);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageJwtService"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageJwtService"] }]; }, null); })();


/***/ }),

/***/ "v3oI":
/*!****************************************!*\
  !*** ./libs/api/src/lib/api.module.ts ***!
  \****************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "yPkS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ApiModule {
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(); }, providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "w6+i":
/*!*************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts ***!
  \*************************************************************/
/*! exports provided: NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return NgrxFormsFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-forms.selectors */ "WgHb");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");






class NgrxFormsFacade {
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getData);
        this.structure$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getStructure);
        this.errors$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getErrors);
        this.touched$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getTouchedForm);
    }
    setStructure(structure) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["setStructure"]({ structure }));
    }
    setData(data) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["setData"]({ data }));
    }
    updateData(data) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["updateData"]({ data }));
    }
    initializeForm() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["initializeForm"]());
    }
    initializeErrors() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["initializeErrors"]());
    }
    resetForm() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["resetForm"]());
    }
}
NgrxFormsFacade.ɵfac = function NgrxFormsFacade_Factory(t) { return new (t || NgrxFormsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
NgrxFormsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxFormsFacade, factory: NgrxFormsFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxFormsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "woSD":
/*!**************************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.interfaces.ts ***!
  \**************************************************************/
/*! exports provided: ngrxRouterFeatureKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxRouterFeatureKey", function() { return ngrxRouterFeatureKey; });
const ngrxRouterFeatureKey = 'router';


/***/ }),

/***/ "yPkS":
/*!*****************************************!*\
  !*** ./libs/api/src/lib/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var apps_vms_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apps/vms-web/src/environments/environment */ "dUe9");





class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(url, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()) {
        return this.http.get(`${apps_vms_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, {
            headers: this.headers,
            params,
        });
    }
    post(url, data) {
        return this.http.post(`${apps_vms_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, JSON.stringify(data), { headers: this.headers });
    }
    put(url, data) {
        return this.http.put(`${apps_vms_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    delete(url) {
        return this.http.delete(`${apps_vms_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, {
            headers: this.headers,
        });
    }
    get headers() {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headersConfig);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zt7d":
/*!***********************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts ***!
  \***********************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class TextareaComponent {
}
TextareaComponent.ɵfac = function TextareaComponent_Factory(t) { return new (t || TextareaComponent)(); };
TextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextareaComponent, selectors: [["app-textarea"]], inputs: { field: "field", group: "group" }, decls: 3, vars: 4, consts: [[1, "form-group", 3, "formGroup"], [1, "form-control", "form-control-lg", 3, "formControlName"]], template: function TextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.field == null ? null : ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rows", (ctx.field == null ? null : ctx.field.attrs == null ? null : ctx.field.attrs.rows) || 5)("placeholder", ctx.field == null ? null : ctx.field.placeholder);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-textarea',
                templateUrl: './textarea.component.html',
                styleUrls: ['./textarea.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map