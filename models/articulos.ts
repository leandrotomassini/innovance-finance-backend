import { Schema, model } from 'mongoose';
import { ArticuloInterface } from '../interfaces/articulo';


const ArticuloSchema = new Schema<ArticuloInterface>({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    descripcionCorta: {
        type: String,
        required: [true, 'La descripción corta es obligatoria.']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria.']
    },
    portada: {
        type: String,
        required: [true, 'La portada es obligatoria']
    },
    terminado: {
        type: Boolean,
        default: false,
        required: [true, '¿Está terminado?']
    },
    contenido: {
        type: String,
        required: [true, 'El contenido es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

export const Articulo = model<ArticuloInterface>('Articulo', ArticuloSchema);