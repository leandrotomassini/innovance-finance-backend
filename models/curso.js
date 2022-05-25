const { Schema, model } = require('mongoose');

const CursoSchema = Schema({
    icono: {
        type: String,
        required: [true, 'El ícono del curso es obligatorio.']
    },
    portada: {
        type: String,
        required: [true, 'La portada del curso es obligatorio.']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del curso es obligatorio.']
    },
    dificultad: {
        type: Schema.Types.ObjectId,
        ref: 'Difucultad',
        required: [true, 'La dificultad del curso es obligatoria.']
    },
});

module.exports = model('Curso', CursoSchema);