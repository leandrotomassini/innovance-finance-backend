const { Schema, model } = require('mongoose');

const SubscriptorSchema = Schema({
    subscripcion: {
        type: String,
        required: [true, 'El nombre para la subscripción es obligatorio.']
    },
    usuario: {
        type: Number,
        required: [true, 'El precio para la subscripción es obligatorio.']
    },
    vencimiento: {
        type: Boolean,
        required: false,
        default: true
    }
});


module.exports = model('Subscriptore', SubscriptorSchema);
