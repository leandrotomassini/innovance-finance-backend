"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/usuario.guard */ 8482);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [
            {
                path: 'aprender',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_estudiar_estudiar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/estudiar/estudiar.module */ 7512)).then(m => m.EstudiarPageModule),
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: 'herramientas',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_herramientas_herramientas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/herramientas/herramientas.module */ 7161)).then(m => m.HerramientasPageModule),
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: 'perfil',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/perfil/perfil.module */ 6217)).then(m => m.PerfilPageModule),
                        canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
                    },
                    {
                        path: 'panel-control',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_panel-control_panel-control_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/panel-control/panel-control.module */ 5666)).then(m => m.PanelControlPageModule),
                        canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
                    }
                ],
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: 'comunidad',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_comunidad_comunidad_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/comunidad/comunidad.module */ 8996)).then(m => m.ComunidadPageModule),
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: 'buscar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_buscar_buscar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/buscar/buscar.module */ 8593)).then(m => m.BuscarPageModule),
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: '',
                redirectTo: '/aprender',
                pathMatch: 'full'
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 7867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  --background: var(--ion-color-fondo-menu);\n  --color: var(--ion-texto-azulado);\n  border: 0;\n  margin-top: -1px;\n}\n\nion-tab-button {\n  --color-selected: var(--ion-verde-manzana);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxpbm5vdmFuY2UtZmluYW5jZVxcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0YiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWZvbmRvLW1lbnUpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dG8tYXp1bGFkbyk7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tdmVyZGUtbWFuemFuYSk7XG59XG4iLCJpb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWZvbmRvLW1lbnUpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dG8tYXp1bGFkbyk7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tdmVyZGUtbWFuemFuYSk7XG59Il19 */";

/***/ }),

/***/ 7867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"aprender\">\n      <ion-icon name=\"library-outline\"></ion-icon>\n      <ion-label>Aprender</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"buscar\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Buscar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"comunidad\">\n      <ion-icon name=\"people-outline\"></ion-icon>\n      <ion-label>Comunidad</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"herramientas\">\n      <ion-icon name=\"logo-apple-ar\"></ion-icon>\n      <ion-label>Herramientas</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"perfil\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map