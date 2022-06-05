"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_usuarios-listado_usuarios-listado_module_ts"],{

/***/ 4849:
/*!***************************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosListadoPageRoutingModule": () => (/* binding */ UsuariosListadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _usuarios_listado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios-listado.page */ 2998);




const routes = [
    {
        path: '',
        component: _usuarios_listado_page__WEBPACK_IMPORTED_MODULE_0__.UsuariosListadoPage
    }
];
let UsuariosListadoPageRoutingModule = class UsuariosListadoPageRoutingModule {
};
UsuariosListadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsuariosListadoPageRoutingModule);



/***/ }),

/***/ 1859:
/*!*******************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosListadoPageModule": () => (/* binding */ UsuariosListadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _usuarios_listado_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios-listado-routing.module */ 4849);
/* harmony import */ var _usuarios_listado_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios-listado.page */ 2998);








let UsuariosListadoPageModule = class UsuariosListadoPageModule {
};
UsuariosListadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _usuarios_listado_routing_module__WEBPACK_IMPORTED_MODULE_1__.UsuariosListadoPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule
        ],
        declarations: [_usuarios_listado_page__WEBPACK_IMPORTED_MODULE_2__.UsuariosListadoPage]
    })
], UsuariosListadoPageModule);



/***/ }),

/***/ 2998:
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosListadoPage": () => (/* binding */ UsuariosListadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuarios_listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios-listado.page.html?ngResource */ 5337);
/* harmony import */ var _usuarios_listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios-listado.page.scss?ngResource */ 5820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);






let UsuariosListadoPage = class UsuariosListadoPage {
    constructor(usuariosService, alertController) {
        this.usuariosService = usuariosService;
        this.alertController = alertController;
        this.usuarioBuscar = '';
    }
    ngOnInit() {
        this.obtenerUsuarios();
    }
    onSearchChange(event) {
        this.obtenerUsuarios();
        this.usuarioBuscar = event.detail.value;
    }
    obtenerUsuarios() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.obtenerUsuarios().then(usuariosArr => {
                this.usuarios = usuariosArr;
            });
        });
    }
    presentAlert(nombre, idUsuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                header: `Borrar a ${nombre}`,
                message: `¿Está seguro de borrar al usuario ${nombre}?`,
                buttons: [
                    {
                        text: 'Borrar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.borrarUsuario(idUsuario);
                            yield this.obtenerUsuarios();
                        })
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                ],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    borrarUsuario(idUsuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.borrarUsuario(idUsuario).then(console.log);
        });
    }
};
UsuariosListadoPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
UsuariosListadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-usuarios-listado',
        template: _usuarios_listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usuarios_listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsuariosListadoPage);



/***/ }),

/***/ 9146:
/*!**************************************!*\
  !*** ./src/app/pipes/filtro.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPipe": () => (/* binding */ FiltroPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroPipe = class FiltroPipe {
    transform(arreglo, texto = '', columna = '') {
        if (texto === '') {
            return arreglo;
        }
        if (!arreglo) {
            return arreglo;
        }
        texto = texto.toLowerCase();
        return arreglo.filter((item) => {
            if (item['nombre'].toLowerCase().includes(texto)) {
                return item['nombre'].toLowerCase().includes(texto);
            }
            if (item['correo'].toLowerCase().includes(texto)) {
                return item['correo'].toLowerCase().includes(texto);
            }
            if (item['rol'].toLowerCase().includes(texto)) {
                return item['rol'].toLowerCase().includes(texto);
            }
        });
    }
};
FiltroPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtro'
    })
], FiltroPipe);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro.pipe */ 9146);



let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe
        ],
        exports: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 5820:
/*!******************************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  cursor: pointer;\n}\n\nion-icon:hover {\n  color: #3880FF;\n}\n\nion-searchbar {\n  margin-top: 0.5em;\n  width: 80%;\n}\n\nion-icon {\n  font-size: 2em;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLWxpc3RhZG8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxpbm5vdmFuY2UtZmluYW5jZVxcc3JjXFxhcHBcXHBhZ2VzXFx1c3Vhcmlvcy1saXN0YWRvXFx1c3Vhcmlvcy1saXN0YWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNDLGNBQUE7QUNBRDs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNBRiIsImZpbGUiOiJ1c3Vhcmlvcy1saXN0YWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taWNvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pY29uOmhvdmVye1xyXG4gY29sb3I6ICMzODgwRkY7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgbWFyZ2luLXRvcDogLjVlbTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICBmb250LXNpemU6IDJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4iLCJpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWljb246aG92ZXIge1xuICBjb2xvcjogIzM4ODBGRjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 5337:
/*!******************************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- TODO: Buscar usuario y crear usuario header -->\n\n<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/panel-control/usuarios-listado\" color=\"primary\">\n      </ion-back-button>\n    </ion-buttons>\n\n\n    <ion-title class=\"ion-text-capitalize\" slot=\"start\">\n      Usuarios\n    </ion-title>\n\n    <ion-searchbar placeholder=\"Buscar usuario\" inputmode=\"text\" type=\"decimal\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" animated slot=\"start\"></ion-searchbar>\n\n    <ion-icon name=\"person-add-outline\" slot=\"end\" [routerLink]=\"'crear-usuario'\"></ion-icon>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <ion-item *ngFor=\"let usuario of usuarios | filtro:usuarioBuscar:'nombre'\">\n        <ion-label>{{usuario.nombre | titlecase}}</ion-label>\n        <ion-label>{{usuario.correo}}</ion-label>\n        <ion-label>{{usuario.rol | titlecase}}</ion-label>\n        <ion-icon name=\"create-outline\" [routerLink]=\"['editar-usuario', usuario.uid]\"></ion-icon>\n        <ion-icon name=\"trash-outline\" (click)=\"presentAlert(usuario.nombre, usuario.uid)\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_usuarios-listado_usuarios-listado_module_ts.js.map