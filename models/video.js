const { Schema, model } = require('mongoose');

const VideoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del video es obligatorio.']
    },
    url: {
        type: String,
        required: [true, 'La URL del video es obligatoria.']
    },
    curso: {
        type: Schema.Types.ObjectId,
        ref: 'Curso',
        required: [true, 'El ID del curso es obligatorio.']
    },
});

module.exports = model('Video', VideoSchema);