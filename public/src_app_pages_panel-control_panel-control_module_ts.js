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

module.exports = "ion-row {\n  text-align: center;\n}\n\nion-avatar {\n  margin: 0 auto;\n  margin-bottom: 1em;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\nion-card {\n  --background: var(--ion-fondo-azul-menu);\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card:hover {\n  --background: var(--ion-azul-intermedio);\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card-title {\n  --color: --var(--ion-texto-blanco);\n}\n\nion-card-subtitle {\n  margin-top: 1em;\n  --color: --var(--ion-texto-blanco);\n}\n\nion-icon {\n  font-size: 1.5em;\n}\n\n.icon-opcion-menu-perfil {\n  color: var(--ion-celeste-clarito);\n  font-size: 1.8em;\n}\n\n.opcion-menu-perfil {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWNvbnRyb2wucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxpbm5vdmFuY2UtZmluYW5jZVxcc3JjXFxhcHBcXHBhZ2VzXFxwYW5lbC1jb250cm9sXFxwYW5lbC1jb250cm9sLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoicGFuZWwtY29udHJvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG5pb24tYXZhdGFye1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1mb25kby1henVsLW1lbnUpO1xyXG4gIC0tY29sb3I6IC0tdmFyKC0taW9uLXRleHRvLWJsYW5jbyk7XHJcbn1cclxuXHJcbmlvbi1jYXJkOmhvdmVye1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWF6dWwtaW50ZXJtZWRpbyk7XHJcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmljb24tb3BjaW9uLW1lbnUtcGVyZmlse1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY2VsZXN0ZS1jbGFyaXRvKTtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4ub3BjaW9uLW1lbnUtcGVyZmlse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iLCJpb24tcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1mb25kby1henVsLW1lbnUpO1xuICAtLWNvbG9yOiAtLXZhcigtLWlvbi10ZXh0by1ibGFuY28pO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWF6dWwtaW50ZXJtZWRpbyk7XG4gIC0tY29sb3I6IC0tdmFyKC0taW9uLXRleHRvLWJsYW5jbyk7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogLS12YXIoLS1pb24tdGV4dG8tYmxhbmNvKTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIC0tY29sb3I6IC0tdmFyKC0taW9uLXRleHRvLWJsYW5jbyk7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmljb24tb3BjaW9uLW1lbnUtcGVyZmlsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jZWxlc3RlLWNsYXJpdG8pO1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuXG4ub3BjaW9uLW1lbnUtcGVyZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";

/***/ }),

/***/ 7874:
/*!************************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/perfil\" color=\"primary\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      Panel de control\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card [routerLink]=\"'usuarios-listado'\">\r\n          <ion-card-header class=\"opcion-menu-perfil\">\r\n            <ion-icon name=\"analytics-outline\" class=\"icon-opcion-menu-perfil\"></ion-icon>\r\n            <ion-card-title>Usuarios</ion-card-title>\r\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </ion-card-header>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_panel-control_panel-control_module_ts.js.map