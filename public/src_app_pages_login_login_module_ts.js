"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui-service.service */ 5623);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);







let LoginPage = class LoginPage {
    constructor(usuarioService, navCtrl, uiService) {
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.loginUser = {
            correo: 'pedro@test.com',
            password: '123456'
        };
    }
    ngOnInit() {
    }
    login(fLogin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (fLogin.invalid) {
                return;
            }
            const valido = yield this.usuarioService.login(this.loginUser.correo, this.loginUser.password);
            if (valido) {
                // Navegar al tabs.
                this.navCtrl.navigateRoot('/aprender', { animated: true });
            }
            else {
                // Mostrar alerta de usaurio y clavo no son correctos.
                this.uiService.alertaInformativa('Usuario o contraseña no son correctos.');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__.UiServiceService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 5623:
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiServiceService": () => (/* binding */ UiServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let UiServiceService = class UiServiceService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    alertaInformativa(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
UiServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
UiServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UiServiceService);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --background: white;\n}\n\nion-input {\n  width: 20%;\n}\n\n.fondo-lista {\n  background-color: blue;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-item {\n  margin-bottom: 1em;\n}\n\nion-item ion-label {\n  color: black !important;\n}\n\nion-item ion-label ion-input {\n  color: black !important;\n}\n\nion-input {\n  color: black !important;\n}\n\nimg {\n  width: auto;\n  margin: auto;\n  display: block;\n  margin-bottom: 1em;\n  margin-top: 40%;\n}\n\n.titulo-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxpbm5vdmFuY2UtZmluYW5jZVxcaW5ub3ZhbmNlLWZpbmFuY2VcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZm9uZG8tbGlzdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1pbnB1dHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG5cclxuXHJcbi50aXR1bG8tbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZm9uZG8tbGlzdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwgaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbi50aXR1bG8tbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <ion-grid>\r\n    <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\r\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\r\n        <ion-col size-sm=\"6\" size-lg=\"4\">\r\n\r\n          <img src=\"../../../assets/icon/innovancefinance.png\" />\r\n\r\n          <ion-label class=\"titulo-logo\">Innovance Finance</ion-label>\r\n\r\n          <ion-item>\r\n            <ion-label>Email</ion-label>\r\n            <ion-input name=\"correo\" type=\"email\" required [(ngModel)]=\"loginUser.correo\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Password</ion-label>\r\n            <ion-input name=\"password\" type=\"password\" required [(ngModel)]=\"loginUser.password\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-button expand=\"full\" type=\"submit\">Login</ion-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <!-- <form #fLogin=\"ngForm\">\r\n\r\n    <ion-grid>\r\n\r\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\r\n        <ion-col size=\"6\">\r\n\r\n          <ion-list class=\"fondo-lista\">\r\n\r\n            <ion-item>\r\n              <ion-label>Email</ion-label>\r\n              <ion-input name=\"email\" type=\"email\" required></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label>Password</ion-label>\r\n              <ion-input name=\"password\" type=\"password\" required></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-list>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\r\n        <ion-col size=\"6\">\r\n          <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\" expand=\"full\">\r\n            Login\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n  </form> -->\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map