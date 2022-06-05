"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_crear-usuario_crear-usuario_module_ts"],{

/***/ 710:
/*!*********************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPageRoutingModule": () => (/* binding */ CrearUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _crear_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario.page */ 4842);




const routes = [
    {
        path: '',
        component: _crear_usuario_page__WEBPACK_IMPORTED_MODULE_0__.CrearUsuarioPage
    }
];
let CrearUsuarioPageRoutingModule = class CrearUsuarioPageRoutingModule {
};
CrearUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearUsuarioPageRoutingModule);



/***/ }),

/***/ 5501:
/*!*************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPageModule": () => (/* binding */ CrearUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _crear_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario-routing.module */ 710);
/* harmony import */ var _crear_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuario.page */ 4842);







let CrearUsuarioPageModule = class CrearUsuarioPageModule {
};
CrearUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearUsuarioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_crear_usuario_page__WEBPACK_IMPORTED_MODULE_1__.CrearUsuarioPage]
    })
], CrearUsuarioPageModule);



/***/ }),

/***/ 4842:
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPage": () => (/* binding */ CrearUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario.page.html?ngResource */ 4885);
/* harmony import */ var _crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuario.page.scss?ngResource */ 5376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);






let CrearUsuarioPage = class CrearUsuarioPage {
    constructor(usuariosService, fb) {
        this.usuariosService = usuariosService;
        this.fb = fb;
        this.usuarioFormulario = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            img: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            google: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]]
        });
        this.usuario = {
            img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            rol: 'ADMINISTRADOR',
            estado: true,
            google: false,
            nombre: '',
            correo: '',
            uid: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.usuarioFormulario.reset({
                nombre: this.usuario.nombre,
                correo: this.usuario.correo,
                img: this.usuario.img,
                rol: this.usuario.rol,
                estado: this.usuario.estado,
                google: this.usuario.google,
            });
        });
    }
    campoEsValido(campo) {
        return this.usuarioFormulario.controls[campo].errors && this.usuarioFormulario.controls[campo].touched;
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.usuarioFormulario.invalid) {
                this.usuarioFormulario.markAllAsTouched();
                return;
            }
            this.usuariosService.crearUsuario(this.usuarioFormulario.value).then(console.log);
        });
    }
};
CrearUsuarioPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
CrearUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-crear-usuario',
        template: _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearUsuarioPage);



/***/ }),

/***/ 5376:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci11c3VhcmlvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4885:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"panel-control\" color=\"primary\">\n      </ion-back-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"ion-text-capitalize\">\n      Crear nuevo usuario\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <form [formGroup]=\"usuarioFormulario\">\n\n      <ion-item>\n        <ion-label>Nombre completo:</ion-label>\n        <ion-input formControlName=\"nombre\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('nombre')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Correo:</ion-label>\n        <ion-input formControlName=\"correo\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('correo')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Contraseña:</ion-label>\n        <ion-input formControlName=\"password\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('password')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-button (click)=\"guardar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Crear nuevo usuario\n      </ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crear-usuario_crear-usuario_module_ts.js.map