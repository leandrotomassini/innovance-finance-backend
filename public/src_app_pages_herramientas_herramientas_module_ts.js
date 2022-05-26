"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_herramientas_herramientas_module_ts"],{

/***/ 9375:
/*!*******************************************************************!*\
  !*** ./src/app/pages/herramientas/herramientas-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientasPageRoutingModule": () => (/* binding */ HerramientasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _herramientas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herramientas.page */ 4319);




const routes = [
    {
        path: '',
        component: _herramientas_page__WEBPACK_IMPORTED_MODULE_0__.HerramientasPage
    }
];
let HerramientasPageRoutingModule = class HerramientasPageRoutingModule {
};
HerramientasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HerramientasPageRoutingModule);



/***/ }),

/***/ 7161:
/*!***********************************************************!*\
  !*** ./src/app/pages/herramientas/herramientas.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientasPageModule": () => (/* binding */ HerramientasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _herramientas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herramientas-routing.module */ 9375);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _herramientas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./herramientas.page */ 4319);








let HerramientasPageModule = class HerramientasPageModule {
};
HerramientasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _herramientas_routing_module__WEBPACK_IMPORTED_MODULE_0__.HerramientasPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_herramientas_page__WEBPACK_IMPORTED_MODULE_2__.HerramientasPage]
    })
], HerramientasPageModule);



/***/ }),

/***/ 4319:
/*!*********************************************************!*\
  !*** ./src/app/pages/herramientas/herramientas.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientasPage": () => (/* binding */ HerramientasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _herramientas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herramientas.page.html?ngResource */ 8256);
/* harmony import */ var _herramientas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./herramientas.page.scss?ngResource */ 1926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HerramientasPage = class HerramientasPage {
    constructor() { }
    ngOnInit() {
    }
};
HerramientasPage.ctorParameters = () => [];
HerramientasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-herramientas',
        template: _herramientas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_herramientas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HerramientasPage);



/***/ }),

/***/ 1926:
/*!**********************************************************************!*\
  !*** ./src/app/pages/herramientas/herramientas.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJyYW1pZW50YXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8256:
/*!**********************************************************************!*\
  !*** ./src/app/pages/herramientas/herramientas.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<app-header titulo=\"Herramientas\"></app-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_herramientas_herramientas_module_ts.js.map