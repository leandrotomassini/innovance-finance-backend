const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El nombre de la categoría del contenido es obligatorio.']
    }
});

module.exports = model('Categoria', CategoriaSchema);
