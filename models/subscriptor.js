const { Schema, model } = require('mongoose');

const SubscriptorSchema = Schema({
    subscripcion: {
        type: Schema.Types.ObjectId,
        ref: 'Subscripcione',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    vencimiento: {
        type: Date,
        default: new Date()
    }
});


module.exports = model('Subscriptore', SubscriptorSchema);
