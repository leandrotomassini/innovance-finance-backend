"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controller/usuario");
const router = (0, express_1.Router)();
router.post('/new', usuario_1.registrarse);
router.get('/', usuario_1.getUsuarios);
router.get('/:id', usuario_1.getUsuario);
router.put('/:id', usuario_1.putUsuario);
router.delete('/:id', usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map