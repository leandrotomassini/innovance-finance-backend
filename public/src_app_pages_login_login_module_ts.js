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

module.exports = "ion-item {\n  --background: white;\n}\n\nion-input {\n  width: 20%;\n}\n\n.fondo-lista {\n  background-color: blue;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-item {\n  margin-bottom: 1em;\n}\n\nimg {\n  width: auto;\n  margin: auto;\n  display: block;\n  margin-bottom: 1em;\n  margin-top: 40%;\n}\n\n.titulo-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxpbm5vdmFuY2UtZmluYW5jZVxcaW5ub3ZhbmNlLWZpbmFuY2VcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mb25kby1saXN0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbmlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG4udGl0dWxvLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZm9uZG8tbGlzdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1hcmdpbi10b3A6IDQwJTtcbn1cblxuLnRpdHVsby1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn0iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <ion-grid>\n    <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col size-sm=\"6\" size-lg=\"4\">\n\n          <img src=\"../../../assets/icon/innovancefinance.png\" />\n\n          <ion-label class=\"titulo-logo\">Innovance Finance</ion-label>\n\n          <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-input name=\"correo\" type=\"email\" required [(ngModel)]=\"loginUser.correo\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input name=\"password\" type=\"password\" required [(ngModel)]=\"loginUser.password\"></ion-input>\n          </ion-item>\n\n          <ion-button expand=\"full\" type=\"submit\">Login</ion-button>\n\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n  <!-- <form #fLogin=\"ngForm\">\n\n    <ion-grid>\n\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col size=\"6\">\n\n          <ion-list class=\"fondo-lista\">\n\n            <ion-item>\n              <ion-label>Email</ion-label>\n              <ion-input name=\"email\" type=\"email\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Password</ion-label>\n              <ion-input name=\"password\" type=\"password\" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height: 100%;\" class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\" expand=\"full\">\n            Login\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map