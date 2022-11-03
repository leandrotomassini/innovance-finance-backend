import { Schema, model } from 'mongoose';

import { RolInterface } from '../interfaces/rol';
import { SubscripcionInterface } from '../interfaces/subscripcion';

const SubscripcionSchema = new Schema<SubscripcionInterface>({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    precio: {
        type: String,
        required: [true, 'El precio es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

export const Subscripcion = model<RolInterface>('Subscripcione', SubscripcionSchema);