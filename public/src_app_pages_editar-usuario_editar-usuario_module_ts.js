"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_editar-usuario_editar-usuario_module_ts"],{

/***/ 6940:
/*!***********************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPageRoutingModule": () => (/* binding */ EditarUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _editar_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario.page */ 3450);




const routes = [
    {
        path: '',
        component: _editar_usuario_page__WEBPACK_IMPORTED_MODULE_0__.EditarUsuarioPage
    }
];
let EditarUsuarioPageRoutingModule = class EditarUsuarioPageRoutingModule {
};
EditarUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarUsuarioPageRoutingModule);



/***/ }),

/***/ 1433:
/*!***************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPageModule": () => (/* binding */ EditarUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _editar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario-routing.module */ 6940);
/* harmony import */ var _editar_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-usuario.page */ 3450);







let EditarUsuarioPageModule = class EditarUsuarioPageModule {
};
EditarUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarUsuarioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_editar_usuario_page__WEBPACK_IMPORTED_MODULE_1__.EditarUsuarioPage]
    })
], EditarUsuarioPageModule);



/***/ }),

/***/ 3450:
/*!*************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPage": () => (/* binding */ EditarUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _editar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario.page.html?ngResource */ 8853);
/* harmony import */ var _editar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-usuario.page.scss?ngResource */ 758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);



// TODO: Cambiar contraseña




let EditarUsuarioPage = class EditarUsuarioPage {
    constructor(usuariosService, rutaActiva, fb) {
        this.usuariosService = usuariosService;
        this.rutaActiva = rutaActiva;
        this.fb = fb;
        this.usuarioFormulario = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            img: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            google: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]]
        });
        this.usuario = {
            img: '',
            rol: '',
            estado: false,
            google: false,
            nombre: '',
            correo: '',
            uid: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.obtenerUsuario(this.rutaActiva.snapshot.params.idusuario).then(usuario => {
                this.usuario = usuario;
            });
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
            yield this.usuariosService.editarUsuario(this.usuario.uid, this.usuarioFormulario.value).then();
        });
    }
};
EditarUsuarioPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
EditarUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editar-usuario',
        template: _editar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditarUsuarioPage);



/***/ }),

/***/ 758:
/*!**************************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".mensaje-error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci11c3VhcmlvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxpbm5vdmFuY2UtZmluYW5jZVxcaW5ub3ZhbmNlLWZpbmFuY2VcXHNyY1xcYXBwXFxwYWdlc1xcZWRpdGFyLXVzdWFyaW9cXGVkaXRhci11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJlZGl0YXItdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVuc2FqZS1lcnJvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIi5tZW5zYWplLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";

/***/ }),

/***/ 8853:
/*!**************************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"panel-control\" color=\"primary\">\n      </ion-back-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"ion-text-capitalize\">\n      {{usuarioFormulario.value.nombre }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <form [formGroup]=\"usuarioFormulario\">\n\n      <ion-item>\n        <ion-label>Nombre completo:</ion-label>\n        <ion-input formControlName=\"nombre\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('nombre')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Correo:</ion-label>\n        <ion-input formControlName=\"correo\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('correo')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-button (click)=\"guardar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Guardar cambios\n      </ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editar-usuario_editar-usuario_module_ts.js.map