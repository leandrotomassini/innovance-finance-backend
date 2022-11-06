import { Schema, model } from 'mongoose';

import { SubscriptorInterface } from '../interfaces/subscriptor';

const SubscriptorSchema = new Schema<SubscriptorInterface>({
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    vencimiento: {
        type: String,
        required: [true, 'El vencimiento es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

export const Subscriptor = model<SubscriptorInterface>('Subscriptore', SubscriptorSchema);