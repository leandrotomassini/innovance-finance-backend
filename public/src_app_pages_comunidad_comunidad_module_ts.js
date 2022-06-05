"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comunidad_comunidad_module_ts"],{

/***/ 6642:
/*!*************************************************************!*\
  !*** ./src/app/pages/comunidad/comunidad-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunidadPageRoutingModule": () => (/* binding */ ComunidadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _comunidad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunidad.page */ 5591);




const routes = [
    {
        path: '',
        component: _comunidad_page__WEBPACK_IMPORTED_MODULE_0__.ComunidadPage
    }
];
let ComunidadPageRoutingModule = class ComunidadPageRoutingModule {
};
ComunidadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComunidadPageRoutingModule);



/***/ }),

/***/ 8996:
/*!*****************************************************!*\
  !*** ./src/app/pages/comunidad/comunidad.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunidadPageModule": () => (/* binding */ ComunidadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comunidad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunidad-routing.module */ 6642);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _comunidad_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comunidad.page */ 5591);








let ComunidadPageModule = class ComunidadPageModule {
};
ComunidadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _comunidad_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComunidadPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_comunidad_page__WEBPACK_IMPORTED_MODULE_2__.ComunidadPage]
    })
], ComunidadPageModule);



/***/ }),

/***/ 5591:
/*!***************************************************!*\
  !*** ./src/app/pages/comunidad/comunidad.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunidadPage": () => (/* binding */ ComunidadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comunidad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunidad.page.html?ngResource */ 7743);
/* harmony import */ var _comunidad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunidad.page.scss?ngResource */ 5357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ComunidadPage = class ComunidadPage {
    constructor() { }
    ngOnInit() {
    }
};
ComunidadPage.ctorParameters = () => [];
ComunidadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comunidad',
        template: _comunidad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comunidad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComunidadPage);



/***/ }),

/***/ 5357:
/*!****************************************************************!*\
  !*** ./src/app/pages/comunidad/comunidad.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb211bmlkYWQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7743:
/*!****************************************************************!*\
  !*** ./src/app/pages/comunidad/comunidad.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<app-header titulo=\"Comunidad\"></app-header>\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comunidad_comunidad_module_ts.js.map