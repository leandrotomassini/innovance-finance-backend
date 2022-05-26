"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_buscar_buscar_module_ts"],{

/***/ 1754:
/*!*******************************************************!*\
  !*** ./src/app/pages/buscar/buscar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageRoutingModule": () => (/* binding */ BuscarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page */ 8691);




const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_0__.BuscarPage
    }
];
let BuscarPageRoutingModule = class BuscarPageRoutingModule {
};
BuscarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuscarPageRoutingModule);



/***/ }),

/***/ 8593:
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageModule": () => (/* binding */ BuscarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-routing.module */ 1754);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscar.page */ 8691);








let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_2__.BuscarPage]
    })
], BuscarPageModule);



/***/ }),

/***/ 8691:
/*!*********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPage": () => (/* binding */ BuscarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page.html?ngResource */ 6961);
/* harmony import */ var _buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page.scss?ngResource */ 821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BuscarPage = class BuscarPage {
    constructor() { }
    ngOnInit() {
    }
};
BuscarPage.ctorParameters = () => [];
BuscarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buscar',
        template: _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuscarPage);



/***/ }),

/***/ 821:
/*!**********************************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNjYXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6961:
/*!**********************************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-header titulo=\"Buscar\"></app-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_buscar_buscar_module_ts.js.map