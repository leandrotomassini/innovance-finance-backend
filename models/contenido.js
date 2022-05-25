const { Schema, model } = require('mongoose');

const ContenidoSchema = Schema({
    subscripcion: {
        type: Schema.Types.ObjectId,
        ref: 'Subscripcion',
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
});

module.exports = model('Contenido', ContenidoSchema);
