"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_panel-control_panel-control_module_ts"],{

/***/ 6486:
/*!*********************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPageRoutingModule": () => (/* binding */ PanelControlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _panel_control_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control.page */ 8651);




const routes = [
    {
        path: '',
        component: _panel_control_page__WEBPACK_IMPORTED_MODULE_0__.PanelControlPage
    }
];
let PanelControlPageRoutingModule = class PanelControlPageRoutingModule {
};
PanelControlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelControlPageRoutingModule);



/***/ }),

/***/ 5666:
/*!*************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPageModule": () => (/* binding */ PanelControlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _panel_control_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control-routing.module */ 6486);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _panel_control_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-control.page */ 8651);








let PanelControlPageModule = class PanelControlPageModule {
};
PanelControlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _panel_control_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelControlPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_panel_control_page__WEBPACK_IMPORTED_MODULE_2__.PanelControlPage]
    })
], PanelControlPageModule);



/***/ }),

/***/ 8651:
/*!***********************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPage": () => (/* binding */ PanelControlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _panel_control_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control.page.html?ngResource */ 7874);
/* harmony import */ var _panel_control_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-control.page.scss?ngResource */ 4530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PanelControlPage = class PanelControlPage {
    constructor() { }
    ngOnInit() {
    }
};
PanelControlPage.ctorParameters = () => [];
PanelControlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-panel-control',
        template: _panel_control_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_panel_control_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PanelControlPage);



/***/ }),

/***/ 4530:
/*!************************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC1jb250cm9sLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7874:
/*!************************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/perfil\" color=\"primary\">\n      </ion-back-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"ion-text-capitalize\">\n      Panel de control\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n      <ion-card-title>Usuarios:</ion-card-title>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Pokémon Yellow</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mega Man X</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>The Legend of Zelda</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pac-Man</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Super Mario World</ion-label>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_panel-control_panel-control_module_ts.js.map