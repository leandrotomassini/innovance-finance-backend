const Role = require('../models/role');
const { Usuario, Categoria, Producto, Subscripcion, Escuela } = require('../models');

const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const emailExiste = async (correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const existeSubscripcion = async (nombre = '') => {

    const existeSubscripcion = await Subscripcion.findOne({ nombre });

    if (existeSubscripcion) {
        throw new Error(`La subscripción ${nombre} ya existe.`);
    }
}

const existeEscuela = async (nombre = '') => {

    const existeEscuela = await Escuela.findOne({ nombre });

    if (existeEscuela) {
        throw new Error(`La escuela ${nombre} ya existe.`);
    }
}

const existeSubscripcionPorId = async (id = '') => {

    const existeSubscripcion = await Subscripcion.findById(id);

    if (!existeSubscripcion) {
        throw new Error(`La subscripción id ${id} no existe.`);
    }
}


const existeUsuarioPorId = async (id) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
}

/**
 * Categorias
 */
const existeCategoriaPorId = async (id) => {

    // Verificar si el correo existe
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id no existe ${id}`);
    }
}



/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = (coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error(`La colección ${coleccion} no es permitida, ${colecciones}`);
    }
    return true;
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    coleccionesPermitidas,
    existeSubscripcion,
    existeSubscripcionPorId,
    existeEscuela
}

