const { Schema, model } = require('mongoose');

const PostSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio.']
    },
    portada: {
        type: String,
        required: [true, 'La portada es obligatoria.']
    },
    contenido: {
        type: String,
        required: false,
        default: ''
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model('Post', PostSchema);
