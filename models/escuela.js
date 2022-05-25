const { Schema, model } = require('mongoose');

const EscuelaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la escuela es obligatorio.']
    },
    url: {
        type: String,
        required: [true, 'La URL de la escuela es obligatoria.']
    },
    icono: {
        type: String,
        required: [true, 'El ícono de la escuela es obligatoria.']
    },
});

module.exports = model('Escuela', EscuelaSchema);