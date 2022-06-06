"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_usuarios-listado_usuarios-listado_module_ts"],{

/***/ 4842:
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPage": () => (/* binding */ CrearUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario.page.html?ngResource */ 4885);
/* harmony import */ var _crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuario.page.scss?ngResource */ 5376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);







let CrearUsuarioPage = class CrearUsuarioPage {
    constructor(usuariosService, fb, modalController) {
        this.usuariosService = usuariosService;
        this.fb = fb;
        this.modalController = modalController;
        this.usuarioFormulario = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            img: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            google: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]]
        });
        this.usuario = {
            img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            rol: 'ADMINISTRADOR',
            estado: true,
            google: false,
            nombre: '',
            correo: '',
            uid: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.usuarioFormulario.reset({
                nombre: this.usuario.nombre,
                correo: this.usuario.correo,
                img: this.usuario.img,
                rol: this.usuario.rol,
                estado: this.usuario.estado,
                google: this.usuario.google,
            });
        });
    }
    campoEsValido(campo) {
        return this.usuarioFormulario.controls[campo].errors && this.usuarioFormulario.controls[campo].touched;
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.usuarioFormulario.invalid) {
                this.usuarioFormulario.markAllAsTouched();
                return;
            }
            yield this.usuariosService.crearUsuario(this.usuarioFormulario.value).then();
            this.modalController.dismiss();
        });
    }
    salirSinArgumentos() {
        this.modalController.dismiss();
    }
};
CrearUsuarioPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
CrearUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-crear-usuario',
        template: _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearUsuarioPage);



/***/ }),

/***/ 3450:
/*!*************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPage": () => (/* binding */ EditarUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _editar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario.page.html?ngResource */ 8853);
/* harmony import */ var _editar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-usuario.page.scss?ngResource */ 758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);



// TODO: Cambiar contraseña




let EditarUsuarioPage = class EditarUsuarioPage {
    constructor(usuariosService, modalController, fb) {
        this.usuariosService = usuariosService;
        this.modalController = modalController;
        this.fb = fb;
        this.usuarioFormulario = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            img: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            google: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]]
        });
        this.usuario = {
            img: '',
            rol: '',
            estado: false,
            google: false,
            nombre: '',
            correo: '',
            uid: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.obtenerUsuario(this.idUsuarioEditar).then(usuario => {
                this.usuario = usuario;
            });
            this.usuarioFormulario.reset({
                nombre: this.usuario.nombre,
                correo: this.usuario.correo,
                img: this.usuario.img,
                rol: this.usuario.rol,
                estado: this.usuario.estado,
                google: this.usuario.google,
            });
        });
    }
    campoEsValido(campo) {
        return this.usuarioFormulario.controls[campo].errors && this.usuarioFormulario.controls[campo].touched;
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.usuarioFormulario.invalid) {
                this.usuarioFormulario.markAllAsTouched();
                return;
            }
            yield this.usuariosService.editarUsuario(this.usuario.uid, this.usuarioFormulario.value).then();
            this.modalController.dismiss();
        });
    }
    salirSinArgumentos() {
        this.modalController.dismiss();
    }
};
EditarUsuarioPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
EditarUsuarioPage.propDecorators = {
    idUsuarioEditar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EditarUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editar-usuario',
        template: _editar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditarUsuarioPage);



/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _usuarios_listado_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios-listado-routing.module */ 4849);
/* harmony import */ var _usuarios_listado_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios-listado.page */ 2998);
/* harmony import */ var _editar_usuario_editar_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editar-usuario/editar-usuario.page */ 3450);
/* harmony import */ var _crear_usuario_crear_usuario_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crear-usuario/crear-usuario.page */ 4842);










let UsuariosListadoPageModule = class UsuariosListadoPageModule {
};
UsuariosListadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _usuarios_listado_routing_module__WEBPACK_IMPORTED_MODULE_1__.UsuariosListadoPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
        ],
        declarations: [
            _usuarios_listado_page__WEBPACK_IMPORTED_MODULE_2__.UsuariosListadoPage,
            _editar_usuario_editar_usuario_page__WEBPACK_IMPORTED_MODULE_3__.EditarUsuarioPage,
            _crear_usuario_crear_usuario_page__WEBPACK_IMPORTED_MODULE_4__.CrearUsuarioPage
        ]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuarios_listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios-listado.page.html?ngResource */ 5337);
/* harmony import */ var _usuarios_listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios-listado.page.scss?ngResource */ 5820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _crear_usuario_crear_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crear-usuario/crear-usuario.page */ 4842);
/* harmony import */ var _editar_usuario_editar_usuario_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editar-usuario/editar-usuario.page */ 3450);








let UsuariosListadoPage = class UsuariosListadoPage {
    constructor(usuariosService, alertController, modalController) {
        this.usuariosService = usuariosService;
        this.alertController = alertController;
        this.modalController = modalController;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.obtenerUsuarios().then(usuariosArr => {
                this.usuarios = usuariosArr;
            });
        });
    }
    presentAlert(nombre, idUsuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                header: `Borrar a ${nombre}`,
                message: `¿Está seguro de borrar al usuario ${nombre}?`,
                buttons: [
                    {
                        text: 'Borrar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.usuariosService.borrarUsuario(idUsuario).then(console.log);
        });
    }
    mostrarModal(idUsuarioEditar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _editar_usuario_editar_usuario_page__WEBPACK_IMPORTED_MODULE_4__.EditarUsuarioPage,
                componentProps: {
                    idUsuarioEditar: idUsuarioEditar
                }
            });
            yield modal.present();
            // const { data } = await modal.onDidDismiss();
            const { data } = yield modal.onWillDismiss();
            this.obtenerUsuarios();
        });
    }
    mostrarCrearUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _crear_usuario_crear_usuario_page__WEBPACK_IMPORTED_MODULE_3__.CrearUsuarioPage
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            this.obtenerUsuarios();
        });
    }
};
UsuariosListadoPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
UsuariosListadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

/***/ 5376:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".flecha-volver {\n  font-size: 1.3em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXVzdWFyaW8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxpbm5vdmFuY2UtZmluYW5jZVxcc3JjXFxhcHBcXHBhZ2VzXFxjcmVhci11c3VhcmlvXFxjcmVhci11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoiY3JlYXItdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZsZWNoYS12b2x2ZXJ7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIuZmxlY2hhLXZvbHZlciB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 758:
/*!**************************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".mensaje-error {\n  color: red;\n}\n\n.flecha-volver {\n  font-size: 1.3em;\n  margin-left: 1em;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci11c3VhcmlvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxpbm5vdmFuY2UtZmluYW5jZVxcaW5ub3ZhbmNlLWZpbmFuY2VcXHNyY1xcYXBwXFxwYWdlc1xcZWRpdGFyLXVzdWFyaW9cXGVkaXRhci11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoiZWRpdGFyLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnNhamUtZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5mbGVjaGEtdm9sdmVye1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLm1lbnNhamUtZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uZmxlY2hhLXZvbHZlciB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 5820:
/*!******************************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  cursor: pointer;\n}\n\nion-icon:hover {\n  color: #3880FF;\n}\n\nion-searchbar {\n  margin-top: 0.5em;\n}\n\nion-icon {\n  font-size: 2em;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLWxpc3RhZG8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGlubm92YW5jZS1maW5hbmNlXFxpbm5vdmFuY2UtZmluYW5jZVxcc3JjXFxhcHBcXHBhZ2VzXFx1c3Vhcmlvcy1saXN0YWRvXFx1c3Vhcmlvcy1saXN0YWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNDLGNBQUE7QUNBRDs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0FGIiwiZmlsZSI6InVzdWFyaW9zLWxpc3RhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pY29ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWljb246aG92ZXJ7XHJcbiBjb2xvcjogIzM4ODBGRjtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICBtYXJnaW4tdG9wOiAuNWVtO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICBmb250LXNpemU6IDJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4iLCJpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWljb246aG92ZXIge1xuICBjb2xvcjogIzM4ODBGRjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 4885:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n\n    <ion-icon name=\"arrow-back-outline\" slot=\"start\" class=\"flecha-volver\" (click)=\"salirSinArgumentos()\"></ion-icon>\n    <ion-title class=\"ion-text-capitalize\">\n      Crear nuevo usuario\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <form [formGroup]=\"usuarioFormulario\">\n\n      <ion-item>\n        <ion-label>Nombre completo:</ion-label>\n        <ion-input formControlName=\"nombre\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('nombre')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Correo:</ion-label>\n        <ion-input formControlName=\"correo\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('correo')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Contraseña:</ion-label>\n        <ion-input formControlName=\"password\"></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('password')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-button (click)=\"guardar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Crear nuevo usuario\n      </ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n";

/***/ }),

/***/ 8853:
/*!**************************************************************************!*\
  !*** ./src/app/pages/editar-usuario/editar-usuario.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back-outline\" slot=\"start\" class=\"flecha-volver\" (click)=\"salirSinArgumentos()\"></ion-icon>\n    <ion-title class=\"ion-text-capitalize\" slot=\"start\">\n      {{usuarioFormulario.value.nombre }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <form [formGroup]=\"usuarioFormulario\">\n\n      <ion-item>\n        <ion-label>Nombre completo:</ion-label>\n        <ion-input formControlName=\"nombre\" ></ion-input>\n      </ion-item>\n      <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('nombre')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label>\n\n      <ion-item>\n        <ion-label>Correo:</ion-label>\n        <ion-input formControlName=\"correo\" ></ion-input>\n      </ion-item>\n      <!-- <ion-label class=\"mensaje-error\" *ngIf=\"campoEsValido('correo')\">\n        Debe de tener por lo menos cinco caracteres.\n      </ion-label> -->\n\n      <ion-button (click)=\"guardar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Guardar cambios\n      </ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n";

/***/ }),

/***/ 5337:
/*!******************************************************************************!*\
  !*** ./src/app/pages/usuarios-listado/usuarios-listado.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- TODO: Buscar usuario y crear usuario header -->\n\n<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n    \n    <ion-title class=\"ion-text-capitalize\" slot=\"start\">\n      Usuarios\n    </ion-title>\n\n\n    <ion-icon name=\"person-add-outline\" slot=\"end\" (click)=\"mostrarCrearUsuario()\"></ion-icon>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar placeholder=\"Buscar usuario\" inputmode=\"text\" type=\"decimal\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" animated></ion-searchbar>\n  <ion-card>\n    <ion-list>\n      <ion-item *ngFor=\"let usuario of usuarios | filtro:usuarioBuscar:'nombre'\">\n        <ion-label>{{usuario.nombre | titlecase}}</ion-label>\n        <ion-label>{{usuario.correo}}</ion-label>\n        <ion-label>{{usuario.rol | titlecase}}</ion-label>\n        <ion-icon name=\"create-outline\" (click)=\"mostrarModal(usuario.uid)\"></ion-icon>\n        <ion-icon name=\"trash-outline\" (click)=\"presentAlert(usuario.nombre, usuario.uid)\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_usuarios-listado_usuarios-listado_module_ts.js.map