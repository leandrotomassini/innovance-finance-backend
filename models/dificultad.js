const { Schema, model } = require('mongoose');

const DificultadSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El nombre de la dificultad es obligatorio.']
    }
});

module.exports = model('Dificultad', DificultadSchema);