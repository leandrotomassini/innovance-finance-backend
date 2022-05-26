"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_perfil_perfil_module_ts"],{

/***/ 8911:
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 7992);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 6217:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 8911);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page */ 7992);








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_2__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 7992:
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5246);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 2419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);





let PerfilPage = class PerfilPage {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.panelDeControl = '/perfil/panel-control';
        this.usuario = this.usuarioService.usuario;
    }
    ngOnInit() {
        this.usuarioService.validaToken();
    }
    logout() {
        this.usuarioService.logout();
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 2419:
/*!**********************************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  text-align: center;\n}\n\nion-avatar {\n  margin: 0 auto;\n  margin-bottom: 1em;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\nion-card {\n  --background: var(--ion-fondo-azul-menu);\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card:hover {\n  --background: var(--ion-azul-intermedio);\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card-title {\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card-subtitle {\n  margin-top: 1em;\n  --color: --var(--ion-texto-blanco);\n}\n\nion-icon {\n  font-size: 1.5em;\n}\n\n.icon-opcion-menu-perfil {\n  color: var(--ion-celeste-clarito);\n  font-size: 1.8em;\n}\n\n.opcion-menu-perfil {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcaW5ub3ZhbmNlLWZpbmFuY2VcXGlubm92YW5jZS1maW5hbmNlXFxzcmNcXGFwcFxccGFnZXNcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoicGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWF2YXRhcntcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWZvbmRvLWF6dWwtbWVudSk7XHJcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcclxufVxyXG5cclxuaW9uLWNhcmQ6aG92ZXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYXp1bC1pbnRlcm1lZGlvKTtcclxuICAtLWNvbG9yOiAtLXZhcigtLWlvbi10ZXh0by1ibGFuY28pO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAtLWNvbG9yOiAtLXZhcigtLWlvbi10ZXh0by1ibGFuY28pO1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICAtLWNvbG9yOiAtLXZhcigtLWlvbi10ZXh0by1ibGFuY28pO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uaWNvbi1vcGNpb24tbWVudS1wZXJmaWx7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jZWxlc3RlLWNsYXJpdG8pO1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbi5vcGNpb24tbWVudS1wZXJmaWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiIsImlvbi1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWZvbmRvLWF6dWwtbWVudSk7XG4gIC0tY29sb3I6IC0tdmFyKC0taW9uLXRleHRvLWJsYW5jbyk7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYXp1bC1pbnRlcm1lZGlvKTtcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAtLWNvbG9yOiAtLXZhcigtLWlvbi10ZXh0by1ibGFuY28pO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaWNvbi1vcGNpb24tbWVudS1wZXJmaWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNlbGVzdGUtY2xhcml0byk7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5vcGNpb24tbWVudS1wZXJmaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 5246:
/*!**********************************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-header titulo=\"Perfil\"></app-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n        <ion-avatar>\n          <img src=\"{{usuario.img}}\">\n        </ion-avatar>\n\n        <ion-title>{{usuario.nombre}}</ion-title>\n      <!-- TODO: Obtener subscripcion endpoint -->\n       <ion-card-subtitle *ngIf=\"this.usuario.rol === 'ADMINISTRADOR'\">{{usuario.rol}}</ion-card-subtitle>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n\n        <ion-card>\n          <ion-card-header class=\"opcion-menu-perfil\">\n            <ion-icon name=\"analytics-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\n            <ion-card-title>Subscripción</ion-card-title>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header class=\"opcion-menu-perfil\">\n            <ion-icon name=\"create-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\n            <ion-card-title>Editar información</ion-card-title>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header class=\"opcion-menu-perfil\">\n            <ion-icon name=\"help-circle-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\n            <ion-card-title>Consultas</ion-card-title>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card *ngIf=\"this.usuario.rol === 'ADMINISTRADOR'\">\n          <ion-card-header class=\"opcion-menu-perfil\" [routerLink]=\"panelDeControl\">\n            <ion-icon name=\"bar-chart-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\n            <ion-card-title>Panel de control</ion-card-title>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header class=\"opcion-menu-perfil\" (click)=\"logout()\">\n            <ion-icon name=\"key-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\n            <ion-card-title>Cerrar sesión</ion-card-title>\n            <span></span>\n          </ion-card-header>\n        </ion-card>\n\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil_perfil_module_ts.js.map