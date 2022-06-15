
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');


const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch, 
        obtenerUsuario,
        rolesGet} = require('../controllers/usuarios');

const router = Router();


router.get('/',[
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
],usuariosGet );

router.get('/roles',[
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], rolesGet);

router.get('/:id',[
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], obtenerUsuario );

router.put('/:id',[
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ), 
    validarCampos
],usuariosPut );

router.post('/',[
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ), 
    validarCampos
], usuariosPost );

router.delete('/:id',[
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;