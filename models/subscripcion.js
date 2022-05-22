const { Schema, model } = require('mongoose');

const SubscripcionSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre para la subscripción es obligatorio.']
    },
    valor: {
        type: Number,
        required: [true, 'El precio para la subscripción es obligatorio.']
    },
    estado: {
        type: Boolean,
        required: false,
        default: true
    }
});


module.exports = model('Subscripcione', SubscripcionSchema);
